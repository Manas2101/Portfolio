import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    { message: 'Hello! I am TechU, your virtual assistant and You can ask me questions.', sender: 'bot' }
  ],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        message: action.payload.message,
        sender: action.payload.sender,
      });
    },
    clearMessages: (state) => {
      state.messages = [
        { message: 'Hello! I am TechU, your virtual assistant and You can ask me questions.', sender: 'bot' },
      ];
    },
  },
});

export const { addMessage, clearMessages } = uiSlice.actions;
export default uiSlice.reducer;
