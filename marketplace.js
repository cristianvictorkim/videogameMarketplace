const express = require('express');
const app = express();

const router = express.Router();

const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Marketplace');
})

app.get('/about', (req, res) => {
    res.send('About this marketplace');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = router;