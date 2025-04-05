import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from '../../Redux/questionSlice.js';
import { FaUserCircle } from 'react-icons/fa';
import QuestionBox from '../../Components/Questions/QuestionBox.jsx'; // Make sure path is correct

const Home = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(state => state.question);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const questionList = Array.isArray(questions) ? questions : [];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* 🔴 Question Box Component */}
      <QuestionBox />

      <h2 className="text-2xl font-bold mb-6 text-gray-800">🧠 Explore All Questions</h2>
      {questionList.length === 0 ? (
        <p className="text-gray-600">No questions available yet.</p>
      ) : (
        questionList.map(q => (
          <div
            key={q._id}
            className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-center mb-2 text-gray-600">
              <FaUserCircle className="mr-2 text-xl" />
              <span className="font-semibold">{q.user?.name || 'Anonymous'}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{q.title}</h3>
            <p className="text-gray-500 text-sm">Posted recently</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
