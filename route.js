const express = require('express');
const router = express.Router();

const users = require('./controller/userController.js');
const posts = require('./controller/postController.js');

router.use('/users', users);

router.use('/posts', posts);

module.exports = router;
  