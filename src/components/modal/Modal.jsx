import React, { useState } from 'react'
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginFormContainer from './ModalLogin';
//import { CHANGE_PERSONAL_DATA, MODAL_AUTH } from '../Header/Header';
import Preloader from '../common/Preloader';
import ChangeUserData from './ChangeUserData';

export const MODAL_AUTH = 'MODAL_AUTH'
export const CHANGE_PERSONAL_DATA = 'CHANGE_PERSONAL_DATA'

//const MODAL_AUTH = 'MODAL_AUTH'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: 300, sm: 400},
  bgcolor: '#383d47',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({modalOpen, setModalOpen, typeModal, isFetching }) {

  return (

    <div>
      <Modal
        open={modalOpen.isOpen}
        onClose={() => setModalOpen({isOpen: false, type: null})}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modalOpen.type === MODAL_AUTH && <LoginFormContainer setModalOpen={setModalOpen} />}
          {modalOpen.type === CHANGE_PERSONAL_DATA && <ChangeUserData setModalOpen={setModalOpen} />}
          {<Preloader isFetching={isFetching}/>}
          
        </Box>
      </Modal>
    </div>
  );
}