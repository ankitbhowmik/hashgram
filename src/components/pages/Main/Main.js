import React from 'react'
import Navbar from '../../organism/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from '../../template/Home/Home'
const people = [
    {image: "http://localhost:6006/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"},
    {image: null, name:"Rohan", username:"rohan.das"},
    {image: "http://localhost:6006/DSC_0011.JPG", name:"lens", username:"lenscart"}
];

const posts = [
    {image:"http://localhost:6006/post.png", name:"Ankit", username: "ankit.bhowmik", caption:"feeling owesome"},
    {image:"http://localhost:6006/DSC_0011.JPG", name:"Ankit", username: "ankit.bhowmik"}
]
const Main = () => {
    return (
        <>
        <Navbar/>
            <Home people={people} posts={posts}/>
        <h1>footer</h1>
        </>
    )
}

export default Main
