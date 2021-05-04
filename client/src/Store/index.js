import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {countryReducer} from '../Reducers/index';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    countryReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;