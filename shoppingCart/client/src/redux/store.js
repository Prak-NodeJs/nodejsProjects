import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/cart.js'

export default configureStore({
    reducer: {
        cart: cartReducer
    },
})