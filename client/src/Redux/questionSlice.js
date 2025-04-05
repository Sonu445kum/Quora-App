import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuestions = createAsyncThunk('question/fetchQuestions', async () => {
  const res = await axios.get('/api/questions');
  return res.data;
});
export const addQuestion = createAsyncThunk('question/addQuestion', async (form) => {
    const token = localStorage.getItem('token');
    const res = await axios.post('/api/questions', form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  });

const questionSlice = createSlice({
  name: 'question',
  initialState: { questions: [] },
  extraReducers: builder => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    })
    .addCase(addQuestion.fulfilled, (state, action) => {
        state.questions.unshift(action.payload); // add to top
      });
  }
});

export default questionSlice.reducer;