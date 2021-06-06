import { CHAT_ADD_NEW_CHAT, CHAT_ADD_NEW_MESSAGE, CHAT_SET_CHATS, CHAT_SET_MESSAGES } from "./chat.type";

const initialState = {
    chatLoading: false,
    chatId: "",
    messages: [],
    chats: [],
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHAT_ADD_NEW_CHAT:
            return {
                ...state,
                messages: [],
                chatId: action.chatId,
                chats: [action.friend, ...state.chats],
            }
        case CHAT_SET_CHATS:
            return {
                ...state,
                chats: [...action.chats],
            }
        case CHAT_SET_MESSAGES:
            return {
                ...state,
                chatId: action.chatId,
                messages: [...action.messages],
            }
        case CHAT_ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [action.message, ...state.messages],
            }

        default:
            return state;
    }
}

export default chatReducer