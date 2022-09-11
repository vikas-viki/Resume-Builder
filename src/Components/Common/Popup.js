import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  justifyContent: 'center',
  height: 110,
  width: 290,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  textAlign: 'center',
};

export default function Popup(props) {
  const { title } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => { setOpen(false) }, 2100);
  }
  const handleClose = () => setOpen(false);

  React.useEffect(() => { handleOpen(); }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <img src='https://i.postimg.cc/6pdgr7Ph/Complete-Right.gif' width='60px' height='60px' alt='img' />
          <Typography id="modal-modal-title" sx={{ fontSize: '13px', fontWeight: 600, fontFamily: 'sans-serif', opacity: 0.9 }} component="h5">
            {"title"}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
