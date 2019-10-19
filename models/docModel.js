const mongoose = require('mongoose');

const documentationSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'A document must have a section.'],
    trim: true
  },
  software: {
    type: String,
    required: [true, 'A document must belong to a software.'],
    trim: true
  },
  items: [
    {
      item: {
        type: String,
        required: [true, 'A item must have a title.'],
        trim: true
      },
      section: [
        {
          title: {
            type: String,
            required: [true, 'A section must have a title.'],
            trim: true
          },
          text: {
            type: String,
            required: [true, 'A section must have a description text.'],
            trim: true
          },
          images: [String]
        }
      ]
    }
  ]
});

const Document = new mongoose.model('Document', documentationSchema);

module.exports = Document;
