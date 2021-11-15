import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feedbacks: [],
};

export const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        addFeedback: (state, action) => state.feedbacks.push(action.payload),
        deleteLastFeedback: (state) => state.feedbacks.pop(),
    }
});

export const { addFeedback, deleteLastFeedback } = feedbacksSlice.actions;

export default feedbacksSlice.reducer;
