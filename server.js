const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/booking', (req, res) => {
    res.redirect('/booking.html');
});

app.get('/social', (req, res) => {
    res.redirect('https://www.facebook.com/EvEnPeTeBand/');
});

app.get('/payment', (req, res) => {
    res.redirect('/payment.html');
});

app.get('/merch', (req, res) => {
    res.redirect('/merch.html');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
