const express = require('express');
const app = express();
app.get('/cars', (req, res) => {
    res.json([{id: 1, model: 'Tesla Model 3'}]);
});
app.listen(8081, () => console.log('Car Service running on 8081'));
