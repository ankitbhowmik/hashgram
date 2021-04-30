import React from 'react'
import PropTypes from 'prop-types'

import ResponsiveImg from '../../atom/ResponsiveImg/ResponsiveImg'
import Rectangle from '../../atom/Skeleton/Rectangle'
import { P, Span } from '../../atom/Text/Text'

import {Border,
    ImageDiv,
    NameDiv,
    NameText,
    StyledAvatar} from './Post.style';

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
                            image="/DSC_0011.JPG"
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
    caption: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Post
