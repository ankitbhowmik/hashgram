import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./rootSaga";
import NotificationReducer from "./Notification/Notification.reducer";
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
	user: userReducer,
    notification: NotificationReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;