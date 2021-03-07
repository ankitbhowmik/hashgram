import React from 'react'
import styled from 'styled-components'
import Avatar from '../../atom/Avatar/Avatar'
import ResponsiveImg from '../../atom/ResponsiveImg/ResponsiveImg'
import Rectangle from '../../atom/Skeleton/Rectangle'
import { P, Span } from '../../atom/Text/Text'
import PropTypes from 'prop-types'

const Border = styled.div`
    width: 600px;
    border: 0.5px solid lightgray;
    margin-bottom: 100px;
`

const ImageDiv = styled.div`
    width: 598px;
    max-height: 598px;
    background-color:lightgray;
    overflow: hidden;
    background-color:white;
`

const NameDiv = styled.div`
    height: 60px;
    width: 100%;
    position: relative;
    background-color:white;
    border-bottom:0.5px solid lightgray;
`

const NameText = styled.span`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 70px;
`

const StyledAvatar = styled(Avatar)`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
`

const LoadingPost = ()=> (
    <Border>
        <NameDiv>
            <StyledAvatar size="small"/>
            <NameText>
                <Rectangle width="150px" height="13px" gap="5px"/>
                <Rectangle width="200px" height="13px"/>
            </NameText>
        </NameDiv>
        <ImageDiv style={{height: 350}}/>
    </Border> 
)

const Post = ({loading, image, name, username, caption}) => {
    return (
        <>
            {loading 
                ? <LoadingPost/>
                : <Border>
                    <NameDiv>
                        <StyledAvatar 
                            size="small" 
                            image="http://localhost:6006/DSC_0011.JPG"
                        />
                        <NameText>
                            {name} <br/> 
                            <Span color="gray">
                                {username}
                            </Span>
                        </NameText>
                    </NameDiv>
                    <ImageDiv>
                        <P style={{backgroundColor:"white"}}>{caption}</P>
                        <ResponsiveImg src={image} alt={image}/>
                    </ImageDiv>
                </Border>
            }
        </>
    )
}

Post.propTypes = {
    loading: PropTypes.bool, 
    image:PropTypes.string, 
    name: PropTypes.string.isRequired, 
    username: PropTypes.string.isRequired, 
    caption: PropTypes.oneOf([PropTypes.string, PropTypes.number])
}

export default Post
