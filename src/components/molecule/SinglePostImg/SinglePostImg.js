import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.img`
    width:150px;
    height:150px;
    object-fit:cover;
`

const SinglePostImg = ({image, alt}) => {
    return (
        <div>
            <StyledImg src={image} alt={alt || image}/>
        </div>
    )
}

SinglePostImg.propType = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default SinglePostImg
