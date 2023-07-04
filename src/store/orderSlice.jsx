import { createSlice } from "@reduxjs/toolkit";
import { addOrder, deleteOrder, getAllOrders, getOrderById, getOrderByIdPelapak, getOrderByIdUser, updateOrder } from "../services/orders";
import { getMonthlySales } from "../services/voucher";


const initialState = {
    orders: [],
    orderUser: [],
    sales: [],
    order: null,
    loading: false,
    error: null
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Get all orders
        builder.addCase(getAllOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.orders = action.payload;
            state.loading = false;
        });
        builder.addCase(getAllOrders.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });


        builder.addCase(getOrderByIdUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getOrderByIdUser.fulfilled, (state, action) => {
            state.orderUser = action.payload;
            state.loading = false;
        });
        builder.addCase(getOrderByIdUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });


        // Get order by ID
        builder.addCase(getOrderById.pending, getOrderByIdPelapak.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getOrderById.fulfilled, getOrderByIdPelapak.fulfilled, (state, action) => {
            state.order = action.payload;
            state.loading = false;
        });

        builder.addCase(getOrderById.rejected, getOrderByIdPelapak.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });



        // Add order
        builder.addCase(addOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addOrder.fulfilled, (state, action) => {
            // Handle adding order
            state.order = action.payload;
            state.loading = false;
        });
        builder.addCase(addOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(updateOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.order = action.payload
        });
        builder.addCase(updateOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });

        // Delete order
        builder.addCase(deleteOrder.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteOrder.fulfilled, (state) => {
            // Handle deleting order
            // Modify state accordingly
            state.loading = false;
        });
        builder.addCase(deleteOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(getMonthlySales.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getMonthlySales.fulfilled, (state, action) => {
            state.sales = action.payload;
            state.loading = false;
        });
        builder.addCase(getMonthlySales.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default ordersSlice.reducer;
