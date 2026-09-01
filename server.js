/* ===========================================
   Salman Electronics - Backend Server
   Order + Complaint/Feedback via Brevo API v3
   =========================================== */
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

// ============================================
// Brevo Transational Email API helper
// Node built-in fetch use karta hai, koi pakage
// package needed nahi.
// ============================================
async function sendBrevoEmail({ to, subject, text, html, replyTo }) {
    const payload = {
        sender: {
            name: 'New Salman Electronics',
            email: process.env.BREVO_SENDER_EMAIL
        },
        to: [{ email: to, name: 'Salman Electronics Owner' }],
        subject,
        textContent: text,
        htmlContent: html
    };

    if (replyTo) payload.replyTo = replyTo;

    const resp = await fetch(BREVO_API_URL, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': process.env.BREVO_API_KEY,
            'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!resp.ok) {
        const errText = await resp.text().catch(() => '');
        throw new Error(`Brevo API ${resp.status}: ${errText}`);
    }

    return resp.json();
}

// build HTML email wrapper
function buildOrderHtml({ name, phone, address, paymentMethod, notes, items, total }) {
    const itemRows = items.map((item, i) => `
        <tr>
            <td style="padding:8px;border:1px solid #e2e8f0;">${i + 1}</td>
            <td style="padding:8px;border:1px solid #e2e8f0;">${item.brand} ${item.model} (${item.category})</td>
            <td style="text-align:right;padding:8px;border:1px solid #e2e8f0;">Rs. ${item.price.toLocaleString()}</td>
        </tr>`).join('');

    return `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:#0f172a;color:#fff;padding:20px;border-radius:12px 12px 0 0;">
                <h2 style="margin:0;">New Order Received</h2>
                <p style="margin:5px 0 0;opacity:.7;">New Salman Electronics Website</p>
            </div>
            <div style="padding:20px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
                <p><strong>Customer:</strong> ${name}</p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Address:</strong> ${address || 'N/A'}</p>
                <p><strong>Payment:</strong> ${paymentMethod || 'Cash'}</p>
                <p><strong>Notes:</strong> ${notes || 'None'}</p>
                <hr style="border:1px solid #e2e8f0;">
                <h3>Items Ordered:</h3>
                <table style="width:100%;border-collapse:collapse;">
                    <thead><tr style="background:#f8fafc;"><th style="text-align:left;padding:8px;border:1px solid #e2e8f0;">#</th><th style="text-align:left;padding:8px;border:1px solid #e2e8f0;">Product</th><th style="text-align:right;padding:8px;border:1px solid #e2e8f0;">Price</th></tr></thead>
                    <tbody>${itemRows}</tbody>
                </table>
                <div style="background:#f0fdf4;padding:12px;border-radius:8px;margin-top:12px;text-align:center;">
                    <strong style="font-size:1.2rem;color:#059669;">TOTAL: Rs. ${total.toLocaleString()}</strong>
                </div>
            </div>
        </div>`;
}

function buildContactHtml({ name, phone, email, subject, message, typeLabel, type }) {
    const color = type === 'complaint' ? '#dc2626' : '#2563eb';
    return `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
            <div style="background:${color};color:#fff;padding:20px;border-radius:12px 12px 0 0;">
                <h2 style="margin:0;">Customer ${typeLabel}</h2>
                <p style="margin:5px 0 0;opacity:.7;">New Salman Electronics Website</p>
            </div>
            <div style="padding:20px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                <p><strong>Email:</strong> ${email || 'N/A'}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <hr style="border:1px solid #e2e8f0;">
                <p style="color:#475569;line-height:1.7;">${message}</p>
            </div>
        </div>`;
}

// ============================================
// POST /api/order - Order submit via Email (+ WhatsApp on frontend)
// ============================================
app.post('/api/order', async (req, res) => {
    const { name, phone, address, items, total, paymentMethod, notes } = req.body;

    if (!name || !phone || !items || items.length === 0) {
        return res.status(400).json({ success: false, message: 'Name, phone, and at least one item required' });
    }

    const itemList = items.map((item, i) =>
        `${i + 1}. ${item.brand} ${item.model} (${item.category}) - Rs. ${item.price.toLocaleString()}`
    ).join('\n');

    const text = `
SALMAN ELECTRONICS - NEW ORDER
================================
Customer: ${name}
Phone: ${phone}
Address: ${address || 'N/A'}
Payment: ${paymentMethod || 'Cash'}
Notes: ${notes || 'None'}

ITEMS:
${itemList}

================================
TOTAL: Rs. ${total.toLocaleString()}
================================
    `.trim();

    try {
        await sendBrevoEmail({
            to: process.env.OWNER_EMAIL,
            subject: `New Order - ${name} - Rs. ${total.toLocaleString()}`,
            text,
            html: buildOrderHtml({ name, phone, address, paymentMethod, notes, items, total }),
            replyTo: { email: req.body.email || undefined, name }
        });
        console.log(`Order email sent via Brevo from ${name} (${phone})`);
        res.json({ success: true, message: 'Order submitted successfully' });
    } catch (err) {
        console.error('Order email error:', err.message);
        // WhatsApp flow continue kare
        res.json({ success: true, message: 'Order received', emailNote: 'Email delivery may be delayed' });
    }
});

// ============================================
// POST /api/contact - Complaint / Feedback / Message
// ============================================
app.post('/api/contact', async (req, res) => {
    const { name, phone, email, subject, message, type } = req.body;

    if (!name || !phone || !message) {
        return res.status(400).json({ success: false, message: 'Name, phone, and message required' });
    }

    const typeLabel = type === 'complaint' ? 'COMPLAINT' : type === 'feedback' ? 'FEEDBACK' : 'MESSAGE';

    const text = `
SALMAN ELECTRONICS - CUSTOMER ${typeLabel}
================================
Name: ${name}
Phone: ${phone}
Email: ${email || 'N/A'}
Type: ${typeLabel}

Subject: ${subject || 'N/A'}
Message:
${message}
================================
    `.trim();

    try {
        await sendBrevoEmail({
            to: process.env.OWNER_EMAIL,
            subject: `[${typeLabel}] ${subject || 'Customer Message'} - ${name}`,
            text,
            html: buildContactHtml({ name, phone, email, subject, message, typeLabel, type }),
            replyTo: { email }
        });
        console.log(`${typeLabel} via Brevo from ${name} (${phone})`);
        res.json({ success: true, message: `${typeLabel} sent successfully` });
    } catch (err) {
        console.error('Contact email error:', err.message);
        res.json({ success: true, message: 'Message received', emailNote: 'Email delivery may be delayed' });
    }
});

// SPA fallback
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});