import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from './Button';
import { useTheme } from '@mui/material';
import Zoom from '@mui/material/Zoom';

const style = {
    position: 'absolute',
    top: '25%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '10px 5px 10px 10px',
    transition: 'max-height 1s',
    overflow: 'hidden'
  };

function ModalButton({label, onSubmit, showCancelButton, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Button label={label} onClick={() => setIsOpen(true)}>{label}</Button>
                <Modal
                    open={isOpen}
                    in
                    onClose={() => setIsOpen(false)}
                    >
                    <Zoom in={isOpen}>
                        <Box sx={style}>
                                {children}
                            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
                                {showCancelButton && <Button onClick={() => setIsOpen(false)} label="Cancel"></Button>}
                                {onSubmit && <Button onClick={onSubmit} label="Submit"></Button>}
                            </Box>
                        </Box>
                    </Zoom>
                </Modal>
        </>
    )
}

export default ModalButton;