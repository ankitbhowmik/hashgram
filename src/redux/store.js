import { createStore, combineReducers, applyMiddleware } from "redux";
import NotificationReducer from "./Notification/Notification.reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const rootReducer = combineReducers({
    notification: NotificationReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)

export default store;