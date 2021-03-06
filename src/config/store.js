

import {createStore,combineReducers,applyMiddleware} from "redux"
import * as reducers from "../reducer";
import  thunkMiddleware from "redux-thunk";



const  Apps = combineReducers(reducers); //合并reducer

const store = createStore(
    Apps,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware, //用实现异步的action
    )
);


//store.dispatch({type:"getProductData"})

export default  store