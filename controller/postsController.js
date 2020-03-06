const Document = require('../models/postModel');
const APIFeatures = require('../utils/APIFeatures');

const getAllPosts = async (req, res) => {
  try {
    const features = new APIFeatures(Document.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const posts = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await Document.create(req.body);

    // SEND RESPONSE
    res.status(201).json({
      status: 'success',
      data: {
        post: newPost
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

module.exports = {
  getAllPosts,
  createPost
};
