import { combineReducers, legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import authReducer from './authReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import searchReducer from './searchReducer';


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    search: searchReducer,
    messages: messageReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store