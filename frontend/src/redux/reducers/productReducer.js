import {ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS,
	PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_SUCCESS} from '../types';

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productCount: action.payload.productCount,
                resPerPage: action.payload.resPerPage,
				filteredProductsCount: action.payload.filteredProductsCount

            }

        

        case ALL_PRODUCTS_FAIL:
			return{
				loading:false,
				error:action.payload
			}

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const productDetailsReducer = (state = {product:{}}, action)=>{
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return{
				...state,
				loading:true
			}

		case PRODUCT_DETAILS_SUCCESS:
			return{
				...state,
				loading:false,
				product:action.payload
			}


		case PRODUCT_DETAILS_FAIL:
			return{
				...state,
				loading:false,
				error:action.payload
			}


		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}

		default:
			return state
	}
}