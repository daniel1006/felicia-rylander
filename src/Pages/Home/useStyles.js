import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        greetings: {
            margin: "0px",
            padding: "0px",
            height: '100%',
        },
         gridItem: {
        },
        Card: {
            backgroundColor: 'transparent',
        },
        media: {  
            position: 'absolute',
            backgroundColor: 'white',
            width: '75%',
            height: '80%',
            opacity: '0.7',
        },
        image: { 
            position: 'relative',
            width: '27vw',
            marginLeft: '2.5vw',
        },
        title: {
            marginTop: '5vh',
            marginLeft: '11vw',
            position: 'relative',
            fontFamily: 'Georgia, Times New Roman, Times, serif',
            [theme.breakpoints.down('sm')]: {
            },
        },
        title2: {
            marginLeft: '15vw',
            position: 'relative',
            fontFamily: 'Georgia, Times New Roman, Times, serif',
            [theme.breakpoints.down('sm')]: {
            },
        },
        HomeTitles: {
            position: 'relative',
            marginLeft: '10vw',
            marginTop: '8vh',
        },
    }
})

export default useStyles