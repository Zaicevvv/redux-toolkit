import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchItems} from "./loaderAPI";

const initialState = {
    items: [],
    status: "no results",
};

export const itemsFetchAsync = createAsyncThunk(
    'loader/fetchItems',
    async () => {
        const response = await fetchItems()

        return response.data;
    }
)

export const loaderSlice = createSlice({
    name: "fetchingItems",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(itemsFetchAsync.pending, (state) =>{
                state.status = "loading...";
            })
            .addCase(itemsFetchAsync.fulfilled, (state, action) =>{
                state.status = "fetchedItems:";
                state.items = action.payload;
            })
    }
})

export default loaderSlice.reducer;