import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer.js";
import { authReducer } from "./reducers/userReducer";
import { orderReducer, ordersReducer } from "./reducers/orderReducer.js";
import { adminReducer } from "./reducers/adminReducer.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;
export const server =fetch("http://localhost:4000/api/v1",{
  withCredentials: true,
})
