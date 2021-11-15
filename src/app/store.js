import { configureStore } from '@reduxjs/toolkit';
import feedbacksReducer from '../features/feedback/feedbacksSlice';

export const store = configureStore({
  reducer: {
    feedbacks: feedbacksReducer,
  },
});