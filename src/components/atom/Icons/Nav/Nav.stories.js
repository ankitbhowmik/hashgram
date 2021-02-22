import Nav from "./Nav";

export default {
    component: Nav,
    title: "atom/icon/nav"
}

export const ActiveHome = ()=> <Nav active={true}/>

export const DefHome = ()=> <Nav/>
