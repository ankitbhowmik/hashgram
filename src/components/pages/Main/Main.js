import React from 'react'
import Navbar from '../../organism/Navbar/Navbar'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Home from '../../template/Home/Home'
import Profile from '../../template/Profile/Profile';
import Message from '../../template/Message/Message';

// this peoples and posts is just to mock data from backend
//remove it when backend is completed
const peoples = [
    {image: "/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"},
    {image: null, name:"Rohan", username:"rohan.das"},
    {image: "/DSC_0011.JPG", name:"lens", username:"lenscart"}
];

const postss = [
    {image:"/post.png", name:"Ankit", username: "ankit.bhowmik", caption:"feeling owesome"},
    {image:"/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"}
]

const imgPosts = [
    {image: "/post.png", alt:"ankit"},
    {image: "/post.png", alt:"ankit"},
    {image: "/post.png", alt:"ankit"},
    {image: "/post.png", alt:"ankit"},
    {image: "/post.png", alt:"ankit"},
    {image: "/post.png", alt:"ankit"},
]

//remove people=peoples, posts=postss as it is to mock data
const Main = ({people=peoples, posts=postss}) => {
    const {path} = useRouteMatch();
    return (
        <>
            <Navbar/>
            <br/>
            <Switch>
                <Route path={`${path}/home`}>
                    <Home people={people} posts={posts}/>
                </Route>
                <Route path={`${path}/profile`}>
                    <Profile imgPosts={imgPosts}/>
                </Route>
                <Route>
                    <Message/>
                </Route>
                <Route path="/">
                    <h1> hello </h1>
                </Route>
            </Switch>
        </>
    )
}

export default Main
