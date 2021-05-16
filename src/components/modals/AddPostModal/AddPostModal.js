import React, {useState} from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import url from '../../../constant/url';
import FlexBox from '../../atom/Box/Flex';
import Button from '../../atom/button/Button';
import { TextArea, InputFile, CloseIcon, ImagePost } from './AddPostModal.style';

import { POST_ADD_NEW_POST } from '../../../redux/post/post.type';

Modal.setAppElement('#root');

const AddPostModal = ({modalIsOpen, closeModal}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [imagPreview, setImagePreview] = useState("");

  const customStyle = {
    overlay: {
        backgroundColor:"rgba(0,0,0,0.2)"
      },
    content:{
        top: "80px",
        margin: "0 auto",
        maxWidth: "786px"
      }
  }

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  }

  const onAddPostModalClose = ()=>{
    setImage("");
    setCaption("");
    setImagePreview("");
  }

  const onFileUpload = async () => {
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("newPost", image, image.name)
    try{
      const res = await axios.post(url.uploadPost, formData, {withCredentials:true});
      const {msg, newPost} = res.data;
      if(msg === "success"){
        alert("New Post Uploaded successfully");
        closeModal();
        dispatch({type: POST_ADD_NEW_POST, newPost})
      }else if(msg === "fail"){
        alert("Not uploaded Server Error")
      }
    }catch(err){
      alert("something went wrong");
    }
    // dispatch({type: POST_UPLOAD_POST, image, caption})
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyle}
      onAfterClose={onAddPostModalClose}
    >
      <CloseIcon onClick={closeModal}> X </CloseIcon>
      <FlexBox 
        align="center"
        style={{height: "100%"}}
        plain direction="column"
        justifyContent="space-evenly"
      >
        <div>
          <InputFile 
            type="file"
            name="image"
            onChange={onChangeImage}
          />
        </div>
        <div style={{height:"60%"}}>
          <ImagePost src={ imagPreview || "/upload.png"}/>
        </div>
        <div>
          <TextArea
            value={caption} 
            onChange={(e)=> setCaption(e.target.value)} 
            placeholder="write someting cool :)"
            name="caption"
          />
          <Button onClick={onFileUpload}>upload file</Button>
        </div>
      </FlexBox>
    </Modal>
  );
}

export default AddPostModal
