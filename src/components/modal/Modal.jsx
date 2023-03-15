import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginFormContainer from './ModalLogin';
import { MODAL_AUTH } from '../Header/Header';
import Preloader from '../common/Preloader';

//const MODAL_AUTH = 'MODAL_AUTH'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#383d47',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({modalOpen, setModalOpen, typeModal, registrationNewUser, signIn, isFetching}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {typeModal === MODAL_AUTH && <LoginFormContainer registrationNewUser={registrationNewUser} setModalOpen={setModalOpen} signIn={signIn} isFetching={isFetching}/>}
          {<Preloader isFetching={isFetching}/>}
          
        </Box>
      </Modal>
    </div>
  );
}