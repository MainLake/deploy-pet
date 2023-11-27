const express = require('express');
const path = require('node:path');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express(cors());

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
});