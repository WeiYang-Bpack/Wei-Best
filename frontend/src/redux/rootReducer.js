import { combineReducers } from 'redux';
import {productDetailsReducer, productsReducer} from './reducers/productReducer';
import {authReducer, userReducer} from './reducers/userReducer'
import {cartReducer} from './reducers/cartReducer';
export const rootReducer = combineReducers({

	products: productsReducer,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
	cart: cartReducer,
})


export const initialState ={
	cart:{
		cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: []
	}
}

 