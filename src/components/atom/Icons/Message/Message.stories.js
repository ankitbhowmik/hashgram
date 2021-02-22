import Message from "./Message";

export default {
    component: Message,
    title: "atom/icon/message"
}

export const ActiveHome = ()=> <Message active={true}/>

export const DefHome = ()=> <Message/>
