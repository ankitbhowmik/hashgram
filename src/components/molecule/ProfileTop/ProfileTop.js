import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import url from '../../../constant/url';
import Grid from '../../atom/Box/Grid';
import FlexBox from '../../atom/Box/Flex';
import Avatar from '../../atom/Avatar/Avatar';
import Button from '../../atom/button/Button';
import EditProfileModal from '../../modals/EditProfileModal/EditProfileModal';
import { USER_SAGA_LOGOUT_REQUEST, USER_SET_PROFILE_IMAGE } from '../../../redux/user/user.type';

import { RightDiv, Text, TextSmall } from './ProfileTop.style';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { CHAT_SAGA_CREATE_CONVERSATION } from '../../../redux/chat/chat.type';

const avatarHoverStyle = { opacity: 0.4, transition: "0.4s" };

const ProfileTop = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [editProfileIsOpen, setEditProfileIsOpen] = useState(false);
    const [AvatarHover, setAvatarHover] = useState(false);
    const [editImgSrc, setEditImgSrc] = useState("");
    const [editImg, setEditImg] = useState("");

    const { userId, profileData } = useSelector(state => state.user);

    function onEditImgChange(event) {
        setEditImgSrc(URL.createObjectURL(event.target.files[0]));
        setEditImg(event.target.files[0]);
    }

    const onUploadCancel = () => {
        setEditImg("");
        setEditImgSrc("");
    }

    const onUploadProfileImg = async () => {
        const formdata = new FormData();
        formdata.append("newProfileImg", editImg, editImg.name);
        try {
            const res = await axios.post(url.uploadProfileImage, formdata, { withCredentials: true });
            if (res.data.msg === "success") {
                dispatch({ type: USER_SET_PROFILE_IMAGE, value: res.data.image });
                onUploadCancel();
                setAvatarHover(false);
                alert("image uploaded successfully");
            } else {
                alert("something went wront");
            }
        } catch (err) {
            console.log("error occured");
            alert("please enter proper image file less than 1mb size");
        }
    }

    const sendMessage = () => {
        dispatch({ type: CHAT_SAGA_CREATE_CONVERSATION, profileId: profileData.profileId });
        history.push("/acc/message");
    }

    return (
        <Grid col="1fr 3fr 1fr" style={{ alignItems: "center", justifyItems: "center" }}>
            <div
                style={{ position: "relative" }}
                onMouseEnter={() => setAvatarHover(true)}
                onMouseLeave={() => setAvatarHover(false)}
            >
                <Avatar
                    size="large"
                    image={editImgSrc || (profileData.profileImage ? `${process.env.REACT_APP_HOST_URL}${profileData.profileImage}` : "/noPic.png")}
                    style={AvatarHover ? avatarHoverStyle : {}}
                />
                <input
                    type="file"
                    className="a-custom-file-input"
                    accept="image/*"
                    style={{ position: "absolute", left: 23, top: 65, visibility: (AvatarHover ? "visible" : "hidden") }}
                    onChange={(e) => onEditImgChange(e)}
                />
                {
                    editImgSrc
                        ? (<div>
                            <Button onClick={onUploadProfileImg}>upload</Button>
                            <Button color="coral" onClick={onUploadCancel}>cancel</Button>
                        </div>)
                        : null
                }
            </div>
            <RightDiv>
                <div>
                    <Text>{profileData.fullname}</Text> &nbsp;
                    <EditProfileModal modalIsOpen={editProfileIsOpen} closeModal={() => setEditProfileIsOpen(false)} />
                    {
                        userId === profileData.profileId ? <>
                            <Button color="primary" onClick={() => setEditProfileIsOpen(true)} > Edit Profile </Button>
                            <Button color="gray" style={{ float: "right" }} onClick={() => dispatch({ type: USER_SAGA_LOGOUT_REQUEST })} >Logout</Button>
                        </>
                            : <Button style={{ marginLeft: 5 }} onClick={sendMessage}>Message</Button>
                    }
                </div>
                <FlexBox plain style={{ justifyContent: "space-between" }}>
                    <TextSmall>{profileData.posts} Posts</TextSmall>
                    <TextSmall>{profileData.followers} Followers</TextSmall>
                    <TextSmall>{profileData.followings} Following</TextSmall>
                </FlexBox>
                <div>
                    <TextSmall style={{ marginLeft: 5 }}>{profileData.bio}</TextSmall>
                </div>
            </RightDiv>
        </Grid>
    )
}

ProfileTop.propTypes = {
    image: PropTypes.string,
    posts: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number
}

export default ProfileTop