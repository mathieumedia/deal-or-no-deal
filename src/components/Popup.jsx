
import {
    styled, Fade, Button, Typography, 
    Box, Backdrop, Modal
} from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'container',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Popup(props) {


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <Box sx={style}>
                    {props.children}
                </Box>
            </Fade>
        </Modal>
    );
}
