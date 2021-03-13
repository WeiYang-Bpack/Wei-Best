import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer, initialState} from './rootReducer';
import ReduxThunk from 'redux-thunk';




const middleware = [ReduxThunk];
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;