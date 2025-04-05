const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    space: String
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);