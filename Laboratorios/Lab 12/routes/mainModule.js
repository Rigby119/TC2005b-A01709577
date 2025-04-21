const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render(path.join(__dirname, 'public','index.html'));
});

router.get('/pokeGallery', (req, res) => {
    res.render('pokeGallery');
});

router.get('/calculator', (req, res) => {
    res.render('calculator');
});

module.exports = router;