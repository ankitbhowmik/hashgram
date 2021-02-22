import Home from "./Home";

export default {
    component:Home,
    title:"atom/icon/home"
}

export const ActiveHome = ()=> <Home active={true}/>
export const DefHome = ()=> <Home/>