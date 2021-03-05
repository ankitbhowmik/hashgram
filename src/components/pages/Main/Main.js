import React from 'react'
import Navbar from '../../organism/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from '../../template/Home/Home'
import Footer from '../../organism/Footer/Footer'

const Main = ({people, posts}) => {
    return (
        <>
            <Navbar/>
                <Home people={people} posts={posts}/>
            <Footer/>
        </>
    )
}

export default Main
