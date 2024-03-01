import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ApiUrl = "https://fakestoreapi.com/products"

export const productRequest = createAsyncThunk(
    'productRequest',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.get(ApiUrl);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);