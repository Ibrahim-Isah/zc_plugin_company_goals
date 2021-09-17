import React, {useState, useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
// import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { showEditMissionModal, editMissionText } from '../../redux/editMission.slice';
import { Header, TextBox, SaveBtn, Paper , ModalBody } from './styledEditMission';

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontFamily: 'Lato',
//     [theme.breakpoints.up('sm')]: {
//       width: '80vw',
//       height: '60vh'
//     },
//   },
//   paper: {
//     // backgroundColor: theme.palette.background.paper,
//     backgroundColor: '#F6F6F6',
//     border: '0px solid #000',
//     boxShadow: theme.shadows[5],
//     // padding: theme.spacing(2, 4, 3),
//     padding: '35px',
//     fontFamily: 'Lato',
//     width: '720px',
//     height: '406px',
//     maxWidth: '100%',
//     margin: '1rem',
//     boxSizing: 'border-box',
    
//   },
// }));

const EditMission = () => {
  //  const classes = useStyles();
  const dispatch = useDispatch();
  const { showMission, missionText } = useSelector((state) => state.editMission);
  const [text, setText] = useState('');

  useEffect(() => {
    setText(missionText);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMission]);

  const saveMission = () => {
    dispatch(showEditMissionModal());
    // eslint-disable-next-line no-unused-expressions
    text ? dispatch(editMissionText(text)) : dispatch(editMissionText('No Mission'));
  }

  return (
    <ModalBody>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        // className={classes.modal}
        open={showMission}
        onClose={() => dispatch(showEditMissionModal())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{display:'flex', alignItems:'center', justifyContent:'center' }}
      >
        <Fade in={showMission}>
          {/* className={classes.paper} */}
          <Paper>
            <form  onSubmit={e => e.preventDefault()}>
              <Header id="transition-modal-title">Edit Mission</Header>
              <TextBox required value={text} onChange={e => setText(e.target.value)} placeholder="Click to edit..." />
              <SaveBtn onClick={saveMission}>Save</SaveBtn>
              {/* <SaveBtn onClick={() => dispatch(showEditMissionModal())}>Cancel</SaveBtn> */}
            </form>
          </Paper>
        </Fade>
      </Modal>
    </ModalBody>
  );
}

export default EditMission;