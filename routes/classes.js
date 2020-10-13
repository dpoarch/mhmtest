const express = require('express');
const { classes } = require('../handlers');
const router = express.Router();

/* GET users listing. */
router.get('/', classes.getAllClasses);

module.exports = router;
