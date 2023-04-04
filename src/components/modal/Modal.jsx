import React, { useState } from 'react'
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginFormContainer from './ModalLogin';
//import { CHANGE_PERSONAL_DATA, MODAL_AUTH } from '../Header/Header';
import Preloader from '../common/Preloader';
import ChangeUserData from './ChangeUserData';
import ShowImage from './ShowImage';
import CloseIcon from '@mui/icons-material/Close';

export const MODAL_AUTH = 'MODAL_AUTH'
export const CHANGE_PERSONAL_DATA = 'CHANGE_PERSONAL_DATA'
export const SHOW_IMAGE = 'SHOW_IMAGE'

//const MODAL_AUTH = 'MODAL_AUTH'



export default function BasicModal({modalOpen, setModalOpen, isFetching }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: 300, sm: 400, md: modalOpen.type === SHOW_IMAGE ? 'auto' : 400},
    bgcolor: '#383d47',
    borderRadius: '8px',
    boxShadow: 24,
    p: 1,
    outline: 'none',
  };

  return (

    <div>
      <Modal
        open={modalOpen.isOpen}
        onClose={() => setModalOpen({isOpen: false, type: null})}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon sx={{float: 'right', color: '#fff', cursor: 'pointer'}} onClick={() => setModalOpen({isOpen: false, type: null})}/>
          {modalOpen.type === MODAL_AUTH && <LoginFormContainer setModalOpen={setModalOpen} />}
          {modalOpen.type === CHANGE_PERSONAL_DATA && <ChangeUserData setModalOpen={setModalOpen} />}
          {modalOpen.type === SHOW_IMAGE && <ShowImage linkImages={modalOpen.linkImage}/>}
          {<Preloader isFetching={isFetching}/>}
          
        </Box>
      </Modal>
    </div>
  );
}