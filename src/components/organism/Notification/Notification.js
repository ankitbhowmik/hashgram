import React from 'react'

import { useSelector } from 'react-redux';

import Like from '../../atom/Icons/Like/Like'
import PropTypes from 'prop-types';

import {StyledBox,
    Triangle} from './Notification.style';

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
