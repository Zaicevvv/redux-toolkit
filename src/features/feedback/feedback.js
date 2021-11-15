import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFeedback, deleteLastFeedback } from './feedbacksSlice';

export function Feedback() {
    const feedbacks = useSelector((state) => state.feedbacks.feedbacks);
    const dispatch = useDispatch();

    const [feedback, setFeedback] = useState("")

    const handleChange = (e) => setFeedback(e.target.value);

    const handleSubmit = () => dispatch(addFeedback(feedback));

    const handleDelete = () => dispatch(deleteLastFeedback());


    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Add Feedback</button>
            <button onClick={handleDelete}>Delete Last Feedback</button>
            <input value={feedback} onChange={handleChange} placeholder="type you're feedback"/>
            <ul>
            {feedbacks?.map(el => <li>{el}</li> )}</ul>
        </form>
    );
}