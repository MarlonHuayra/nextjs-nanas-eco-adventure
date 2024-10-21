const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.toString(qr, { type: 'terminal' }, (err, url) => {
        if (err) throw err;
        console.log(url);
    });
});

client.on('ready', () => {
    console.log('WhatsApp client is ready!');
});

client.initialize();

module.exports = client;
