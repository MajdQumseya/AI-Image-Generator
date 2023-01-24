const express = require('express');
const { generateImage } = require('../controllers/openaiController.js')
const router = express.Router();

router.post('/generateImage', (req, res) => {
    generateImage(req, res)
})

module.exports = router;