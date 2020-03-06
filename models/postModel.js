const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  title: {
    type: String,
    required: [true, 'A post must have a title.'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'A post must have a description.'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'A post must have an author.'],
    trim: true
  },
  link: {
    type: String,
    required: [true, 'A post must have a link.'],
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A document must have a header image.'],
    trim: true
  },
  thumbnail: {
    type: String,
    required: [true, 'A document must have a thumbnail.'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  items: [
    {
      title: {
        type: String,
        required: [true, 'A item must have a title.'],
        trim: true
      },
      text: [String],
      image: {
        type: String,
        default: null
      }
    }
  ]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
