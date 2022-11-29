
const express = require('express');
//use express router 
const router = express.Router();

//route get for / 
router.get('/', (req, res) => {
    //res.send('Hello World');
    res.render('form');
});

module.exports = router