import AvatarStories from "./Avatar.stories";
import styled, {css} from 'styled-components';

const Avatar = styled.div`
    background-color: lightgray;
    border-radius: 50%;
    display: inline-block;
    border:1px solid;
    ${
        props => props.size && props.size=="small" && css`
            width: 50px;
            height: 50px;
        `
    }
    ${
        props => props.size && props.size=="medium" && css`
            width: 100px;
            height: 100px;
        `
    }
    ${
        props => props.size && props.size=="large" && css`
            width: 150px;
            height: 150px;
        `
    }
    ${props => props.image && `background-image: url(${props.image});`};
    background-size:cover;
` 

export default Avatar;
