const express = require('express');
const cors = require('cors');
const headerData = require('./data/headerData.json');
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

// listen app
app.listen(8080, () => {
    console.log('Server is running on Port 8080');
});
