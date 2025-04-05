const Question = require('../Models/Question.Model');

exports.askQuestion = async (req, res) => {
    const { title, imageUrl, space } = req.body;
    try {
        const question = await Question.create({
            title,
            imageUrl,
            user: req.user.id,
            space
        });
        res.status(201).json(question);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('user', 'name');
        res.status(200).json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};