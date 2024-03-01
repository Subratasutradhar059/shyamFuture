import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productRequest } from '../ApiAction/ProductApiRequest';


const initialState = {
    data: [],
    isLoading: false,
    error: null,
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(productRequest.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(productRequest.fulfilled, (state, action) => {
                const responseData = action.payload.data
                // console.log("action",responseData)
                
                state.isLoading = false;
                state.data = responseData;
            })
            .addCase(productRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Error fetching products';
            });
    }


})

export default productSlice.reducer;

