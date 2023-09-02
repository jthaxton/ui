
// import Modal from './index';
import React from 'react';
import ModalButton from './ModalButton';
import Typography from '@mui/material/Typography';

export default {
  title: 'ModalButton',
  component: ModalButton,
  tags: ['autodocs'],
  args: {
    showCancelButton: false,
    label: 'Show Modal'
  }

};

export const Playground = ({ ...args }) => {
    const {
        showCancelButton,
        label,
    } = args;
  return (
    <ModalButton label={label} showCancelButton={showCancelButton}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        
    </ModalButton>
  );
};
