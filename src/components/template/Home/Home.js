import React from 'react'
import Grid from '../../atom/Box/Grid'
import styled from 'styled-components'
import Suggestion from '../../organism/Suggestion/Suggestion'
import PropTypes from 'prop-types'
import Post from '../../molecule/Post/Post'

const StickyDiv = styled.div`
    position: sticky;
    top: 0;
`

const Home = ({posts, people}) => {
    return (
        <div className="a-container">
            <Grid col="3fr 2fr">
                <div style={{padding:"10px"}}>
                    {
                        posts.map(({loading, image, name, username, caption}, index)=>(
                            <Post 
                                key={index}
                                loading={loading} 
                                image={image} 
                                name={name} 
                                username={username} 
                                caption={caption}
                            />
                        ))
                    }
                </div>
                <div>
                    <StickyDiv>
                        <Suggestion people={people}/>
                    </StickyDiv>
                </div>
            </Grid>
        </div>
    )
}

Home.propTypes = {
    posts: PropTypes.array,
    suggestions: PropTypes.array,
}

export default Home
