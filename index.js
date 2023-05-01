const express = require('express');
const cors = require('cors');

// initialize app
const app = express();

// initialize middleware
app.use(cors());
app.use(express.json());

// default route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Server!!!' });
});

// listen app
app.listen(8080, () => {
    console.log('Server is running on Port 8080');
});
