import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Modal from '@mui/material/Modal';
import { Card } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '57%',
    padding: 10,
    transform: 'translate(-50%, -50%)',
    width: 670,
    backgroundColor: '#ecf0f1',
    border: '1px solid #0A1929',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

export default function CustomContactModal({open, onClose}: any) {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography style={{textAlign: 'center', fontWeight: 'bold'}} color="text.secondary" id="modal-modal-title" variant="h6" component="h2">
                        Kontakt
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2,}}>
                        <Card elevation={0} style={{display: 'grid', gridTemplateColumns: '1fr 10fr', gridGap: 10, height: '100%', backgroundColor: '#ecf0f1'}}>
                            <ContactPhoneIcon style={{fontSize: 32}}/> <Typography style={{fontSize: 22}} color="text.secondary" gutterBottom>602-470-442</Typography>
                            <ContactMailIcon style={{fontSize: 32}}/> <Typography style={{fontSize: 22}} color="text.secondary" gutterBottom>silowniakrzepa@gmail.com</Typography>
                            <PinDropIcon style={{fontSize: 32}}/> <Typography style={{fontSize: 22}} color="text.secondary" gutterBottom>ul. Kraszewskiego 8a 22-200 Włodawa woj. Lubelskie</Typography>
                        </Card>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}