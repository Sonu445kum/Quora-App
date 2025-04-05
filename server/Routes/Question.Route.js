const express = require('express');
const router = express.Router();
const { askQuestion, getAllQuestions } = require('../Controllers/Question.Controller');
const protect = require('../Middlewares/authMiddleware');

router.post('/ask', protect, askQuestion);
router.get('/', getAllQuestions);

module.exports = router;