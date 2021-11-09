import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsFetchAsync } from './loaderSlice';

export function Loader() {
    const status = useSelector((state) => state.fetchingItems.status);
    const items = useSelector((state) => state.fetchingItems.items);
    const dispatch = useDispatch();

    return (
        <>
            <span>{status}</span>
            <span>{items}</span>
            <button onClick={() => dispatch(itemsFetchAsync())} >
                Load Items
            </button>
        </>
    );
}
