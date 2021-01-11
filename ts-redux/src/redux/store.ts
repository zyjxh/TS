/*
 * @Description: 
 * @Version: 2.0
 * @Autor: ZhengYun
 * @Date: 2021-01-08 09:38:00
 * @LastEditTime: 2021-01-08 15:11:50
 */
// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './rootReducer';

// const store = createStore(rootReducer,
//     compose(
//         applyMiddleware(thunk)
//     )
// );

// export default store;

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';
const Store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
))
export default Store;