const express = require('express');
const {
  getAllDocs,
  createDoc,
  updateDoc,
  deleteDoc
} = require('../controller/documentationController');

const router = express.Router();

// router.param('id', checkId); Middleweare que se usa ucando llega el parámetro id

router
  .route('/')
  .get(getAllDocs)
  .post(createDoc);

router
  .route('/:id')
  .patch(updateDoc)
  .delete(deleteDoc);

module.exports = router;
