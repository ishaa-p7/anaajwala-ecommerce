import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

const userSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            // const existingItem = state.find(item => item.id === action.payload.id);
            // state.push({ ...action.payload, quantity: 1 });

            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: () => {
            return [];
        },
    },
});

export default userSlice.reducer;

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
} = userSlice.actions
