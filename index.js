const express = require('express');
const cors = require('cors');
const headerData = require('./data/headerData.json');
const chefsData = require('./data/chefData.json');
const revipesData = require('./data/reciepesData.json');
// initialize app
const app = express();

// initialize middleware
app.use(cors());
app.use(express.json());

// default route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Server!!!' });
});

// routes
app.get('/slider-data', (req, res) => {
    res.status(200).json({
        success: true,
        results: headerData.data.length,
        headerData,
    });
});

app.get('/chefs-data', (req, res) => {
    res.status(200).json({
        success: true,
        results: chefsData.chefs.length,
        chefsData,
    });
});

app.get('/recipe-data/:id', (req, res) => {
    const { id } = req.params;
    const findData = revipesData.find((el) => el.id === Number(id));
    res.status(200).json({
        success: true,
        findData,
    });
});

// listen app
app.listen(8080, () => {
    console.log('Server is running on Port 8080');
});
