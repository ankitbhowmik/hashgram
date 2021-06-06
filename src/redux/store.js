import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./rootSaga";
import userReducer from './user/user.reducer';
import postReducer from './post/post.reducer';
import chatReducer from "./chat/chat.reducer";
import notificationReducer from "./notification/Notification.reducer";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    chat: chatReducer,
    notification: notificationReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;