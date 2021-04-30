import React, {useState} from 'react'
import Modal from 'react-modal';
import FlexBox from '../../atom/Box/Flex';
import Button from '../../atom/button/Button';
import { TextArea, InputFile, CloseIcon } from './AddPostModal.style';

Modal.setAppElement('#root');

const AddPostModal = ({modalIsOpen, closeModal}) => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");

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

  const onFileUpload = () => {

  }

  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyle}
      onAfterClose={()=> setImage("")}
    >
      <CloseIcon onClick={closeModal}> X </CloseIcon>
      <FlexBox 
        plain direction="column" 
        justifyContent="space-evenly" 
        align="center"
        style={{height: "100%"}}
      >
        <div>
          <InputFile 
            value={image} 
            onChange={e=> setImage(e.target.value)} 
            type="file"
            name="image"
          />
        </div>
        <div>
            <h1> &lt; image preview will be implemented in future PR &gt;</h1>
        </div>
        <div>
          <TextArea 
            value={caption} 
            onChange={(e)=> setCaption(e.target.value)} 
            placeholder="write someting cool :)"
            name="caption"
          />
          <Button>upload file</Button>
        </div>
      </FlexBox>
    </Modal>
  );
}

export default AddPostModal
