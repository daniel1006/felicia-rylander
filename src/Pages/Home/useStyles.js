import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        greetings: {
            margin: "0px",
            padding: "0px",
            height: '100%',
        },
        container: {
          position: 'relative',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        },
        media: {
            height: '100vh',
        },
        title: {
            fontFamily: 'Georgia, Times New Roman, Times, serif',
            position: 'absolute',
            marginLeft: '15%',
            [theme.breakpoints.down('sm')]: {
                marginLeft: '30%',
            },
        },
        title2: {
            fontFamily: 'Georgia, Times New Roman, Times, serif',
            position: 'absolute',
            marginTop: '10%',
            [theme.breakpoints.down('sm')]: {
                marginTop: '25%',
            },
        }
    }
})

export default useStyles