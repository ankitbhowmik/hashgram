import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../../atom/Icons/Profile/Profile';
import Button from '../../atom/button/Button';
import Rectangle from '../../atom/Skeleton/Rectangle';
import { P } from '../../atom/Text/Text';
import {
    RelativeFlexBox,
    StyledAvatar,
    StyledText
} from './People.style';

const LoadingPeople = () => (
    <RelativeFlexBox>
        <div>
            <StyledAvatar size="small" />
            <StyledText>
                <Rectangle width="60px" height="12px" gap="10px" />
                <Rectangle width="100px" height="12px" />
            </StyledText>
        </div>
        <div>
            <Button disabled="true">Follow</Button>
        </div>
    </RelativeFlexBox>
)

const People = ({ loading, image, name, username, button, style, ...props }) => {
    if (loading) {
        return (<LoadingPeople />)
    }

    return (
        <RelativeFlexBox style={style} plain direction="row" {...props}>
            <div>
                {
                    image
                        ? <StyledAvatar size="small" image={process.env.REACT_APP_HOST_URL + image} />
                        : <Profile style={{ transform: "scale(2.4)", transformOrigin: "0" }} />
                }
                <StyledText>
                    {name}
                    <P color="gray" m="0">{username}</P>
                </StyledText>
            </div>
            <div>
                {button && <Button {...button}>{button.name}</Button>}
            </div>
        </RelativeFlexBox>
    )
}

People.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    button: PropTypes.object,
}

People.defaultProps = {
    name: "Name",
    username: "Username"
}

export default People
