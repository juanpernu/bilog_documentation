const express = require('express');
const { getAllPosts, createPost } = require('../controller/postsController');

const router = express.Router();

// router.param('id', checkId); Middleweare que se usa ucando llega el parámetro id

router
  .route('/')
  .get(getAllPosts)
  .post(createPost);

module.exports = router;
