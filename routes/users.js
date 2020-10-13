const express = require('express');
const { users } = require('../handlers');
const router = express.Router();

/* GET users listing. */
router.get('/', users.getAllUsers);

module.exports = router;
