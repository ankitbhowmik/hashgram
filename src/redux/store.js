import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./rootSaga";
import notificationReducer from "./Notification/Notification.reducer";
import userReducer from './user/user.reducer';
import postReducer from './post/post.reducer';

const rootReducer = combineReducers({
	user: userReducer,
    notification: notificationReducer,
    post: postReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;