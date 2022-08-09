import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
            '& label.Mui-focused': {
            color: 'black',
      },
            '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
      },
      },
      whiteBackground: {
            position: 'absolute',
            backgroundColor: 'white',
            width: '75%',
            height: '85%',
            opacity: '0.7',
      },
      contactTitle: {
            position: 'relative',
            marginBottom: '3vh',
      },
      Icons: { 
            position: 'relative',
      },
      form: {
            width: '40vw',
      },
      nameInput: {
            width: '18vw',
            '& label.Mui-focused': {
            color: 'green', },
      },
      subjectInput: {
            width: '18vw',
            marginLeft: '4vw',
     },
      messageInput: {
            width: '100%',
     },
      wrapper: {
            marginTop: '3vh',
            textAlign: 'center',
     },
      button: {
            width: '50%',
            outline: 'solid #90AEB0 3px',
     },
      buttonProgress: {
            left: '50%',
            marginTop: '3.5%',
            position: 'absolute',
     },
}    
})

export default useStyles
