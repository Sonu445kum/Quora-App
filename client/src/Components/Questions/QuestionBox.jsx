import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../../Redux/questionSlice';
import { FaPlus, FaTimes } from 'react-icons/fa';

const topics = ['Technology', 'Science', 'Health', 'Education', 'Sports', 'Entertainment'];

const QuestionBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    image: '',
    link: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addQuestion(formData));
    setFormData({ title: '', topic: '', image: '', link: '' });
    setShowModal(false);
  };

  return (
    <div className="mb-6">
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
      >
        <FaPlus /> Ask a Question
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Ask Your Question</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Enter your question"
                value={formData.title}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                required
              />
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
                required
              >
                <option value="">Select Topic</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="image"
                placeholder="Optional image URL"
                value={formData.image}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="text"
                name="link"
                placeholder="Optional link"
                value={formData.link}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Post Question
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBox;
