import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./Notification.type";

const initialState = {
    show: false
}

const NotificationReducer = (state=initialState, action) => {
    switch (action.type){
        case SHOW_NOTIFICATION:
            return {show: true}
        case HIDE_NOTIFICATION:
            return {show: false}
        default :
            return state;
    }
}

export default NotificationReducer;