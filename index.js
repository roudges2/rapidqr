const express = require('express');
const ejs = require('ejs');
const QRCode = require('qrcode');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Create Routes
app.get('/', (req, res) => {
    console.log(process.env.SITE_NAME)
    res.render('index', { qrCode: null, SITE_NAME: process.env.SITE_NAME }); 
});

app.get('/help', (req, res) => {
    res.render('help', { SITE_NAME: process.env.SITE_NAME }); 
});

app.get('/api/documentation', (req, res) => {
    res.render('dev', { SITE_NAME: process.env.SITE_NAME });
});

app.get('/generate', async (req, res) => {
    const content = req.query.content || 'url';
    const data = req.query.data || 'https://' + process.env.SITE_NAME; 

    let qrCode;

    switch (content) {
        case 'url':
            qrCode = await QRCode.toDataURL(data);
            break;
        case 'text':
            qrCode = await QRCode.toDataURL(data);
            break;
        case 'email':
            qrCode = await QRCode.toDataURL(`mailto:${data}`);
            break;
        case 'phone':
            qrCode = await QRCode.toDataURL(`tel:${data}`);
            break;
        case 'sms':
            qrCode = await QRCode.toDataURL(`sms:${data}`);
            break;
        case 'geo':
            qrCode = await QRCode.toDataURL(`geo:${data}`);
            break;

        default:
            qrCode = null;
            break;
    }

    res.render('index', { qrCode, SITE_NAME: process.env.SITE_NAME }); // Give back QR Code
});

app.get('/api/generate', async (req, res) => {
    const content = req.query.content || 'url';
    const data = req.query.data || 'https://' + process.env.SITE_NAME;

    let qrCode;

    switch (content) {
        case 'url':
        case 'text':
        case 'email':
        case 'phone':
        case 'sms':
        case 'geo':
            qrCode = await QRCode.toDataURL(data);
            break;
        default:
            res.status(400).json({ error: 'Invalid content type' });
            return;
    }

    const qrData = {
        type: content,
        content: data,
        imageData: qrCode,
    };

    res.json(qrData); // Give Back QR Code as JSON String
});


app.listen(port, () => {
    console.log(`Online - PORT:${port}`);
});
