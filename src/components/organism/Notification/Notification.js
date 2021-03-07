import React from 'react'
import styled from 'styled-components'
import Box from '../../atom/Box/Box'
import Like from '../../atom/Icons/Like/Like'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const StyledBox = styled(Box)`
    position: relative;
    border-radius: 5px;
    padding: 30px;
    display:${props => props.show ? "block" : "none"};
    z-index:10;
`

const Triangle = styled.div`
    height: 14px;
    width: 14px;
    background-color: white;
    border-left: 1px solid lightgrey;
    border-bottom: 1px solid lightgray;
    transform: rotate(135deg);
    position:absolute;
    right: 80px;
    top: -8px;
`

const EmptyNotification = ()=>{
    return (
        <>
            <Like/>
            <p>Activity On Your Posts</p>
            <p>When someone likes or comments on one of your posts, you'll see it here.</p>
        </>
    )
}

const Notification = ({notifications=[]}) => {
    const notification = useSelector(state=> state.notification);
    return (
        <StyledBox show={notification.show} width="400px">
            <Triangle/>
            {
                notifications.length === 0 
                ? <EmptyNotification/>
                : <h1>some notification</h1>
            }
        </StyledBox>
    )
}

Notification.propTypes = {
    Notifications: PropTypes.array
}

export default Notification
