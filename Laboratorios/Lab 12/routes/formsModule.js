const express = require('express');
const router = express.Router();

const messages = [];

router.get('/forms', (req, res) => {
    res.render('forms');
});

router.post('/send', (req, res) => {
    const { name, message } = req.body;
    messages.push({ name, message });
    res.redirect('/messages');
});

router.get('/messages', (req, res) => {
    res.render('messages', { messages });
})

module.exports = router;
