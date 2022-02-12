import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: []
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders.push(action.payload)
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter(e => e.id !== action.payload)
        },
    }
})

export const { addOrder, removeOrder } = orderSlice.actions;
export default orderSlice.reducer;