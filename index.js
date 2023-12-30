const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const service = require('./data/service.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bridal Portraiture is running');
})

app.get('/service', (req, res) => {
    res.send(service);
})

app.listen(port, () => {
    console.log(`Bridal Portraiture is running on Port: ${port}`);
})