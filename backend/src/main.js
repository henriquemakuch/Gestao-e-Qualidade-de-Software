const express = require('express');
const Sequelize = require('sequelize');

const Pessoa = require('./models/pessoa.js');
const Empresa = require('./models/empresa.js');
const db = require('./database/sqlite.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/pessoas', async (request, response) => {
    const data = request.body;
    await Pessoa.create(data);
    return response.status(201).send();
});

app.get('/api/pessoas', async (request, response) => {
    const data = await Pessoa.findAll();
    return response.json(data);
});

app.get('/api/pessoas/:id', async (request, response) => {
    const { id } = request.params;
    const data = await Pessoa.findAll({ where: { id }});
    return response.json(data[0]);
});

app.delete('/api/pessoas/:id', async (request, response) => {
    const { id } = request.params;
    await Pessoa.destroy({ where: { id }});
    return response.send();
});

app.post('/api/empresas', async (request, response) => {
    const data = request.body;
    await Empresa.create(data);
    return response.status(201).send();
});

app.get('/api/empresas', async (request, response) => {
    const data = await Empresa.findAll();
    return response.json(data);
});

app.get('/api/empresas/:id', async (request, response) => {
    const { id } = request.params;
    const data = await Empresa.findAll({ where: { id }});
    return response.json(data[0]);
});

app.delete('/api/empresas/:id', async (request, response) => {
    const { id } = request.params;
    await Empresa.destroy({ where: { id }});
    return response.send();
});

app.listen(PORT, async () => {
    await db.sync();
    console.log(`server is listening on port ${PORT}`);
});

