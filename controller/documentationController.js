const Document = require('../models/docModel');
const APIFeatures = require('../utils/APIFeatures');

const getAllDocs = async (req, res) => {
  try {
    const features = new APIFeatures(Document.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const docs = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        docs
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error
    });
  }
};

const createDoc = async (req, res) => {
  try {
    const newDoc = await Document.create(req.body);

    // SEND RESPONSE
    res.status(201).json({
      status: 'success',
      data: {
        doc: newDoc
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
};

const updateDoc = async (req, res) => {
  try {
    const doc = await Document.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'sucess',
      data: {
        doc
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};

const deleteDoc = async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'sucess',
      message: 'Documentation removed sucefully',
      data: null
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};

module.exports = {
  getAllDocs,
  createDoc,
  updateDoc,
  deleteDoc
};
