const http = require('http');
const express = require('express');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = http.createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

const ipAddress = '192.168.1.6'; // Cambia esta dirección IP
const port = 3000; // Puedes mantener el puerto igual o cambiarlo si es necesario

app.prepare().then(() => {
  server.listen(port, ipAddress, () => {
    console.log(`Servidor escuchando en http://${ipAddress}:${port}`);
  });
});
