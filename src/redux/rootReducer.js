import { combineReducers } from 'redux';
import {productDetailsReducer, productsReducer} from './reducers/productReducer';
import {authReducer, userReducer} from './reducers/userReducer'

const rootReducer = combineReducers({

	products: productsReducer,
	productDetails: productDetailsReducer,
	auth: authReducer,
	user: userReducer,
})


export default rootReducer;