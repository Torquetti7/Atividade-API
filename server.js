const express = require('express');
const server = express();
const path = require('path');
 
 
server.use(express.static(path.join(__dirname, 'public')));
 
server.use(express.static(path.join(__dirname, 'views')));
 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
 
 
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});
 
 
server.get('/nier', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/nier.html'));
});
 
 
server.get('/omori', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/omori.html'));
});

server.get('/persona3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/persona3.html'));
});

server.get('/Sobre_nos', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/Sobre_nos.html'));
});
 
 
server.use(function (req, res, next) {
    console.log('aqui');
    return res.sendFile(path.join(__dirname, 'views/404.html'))
})
 
server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
