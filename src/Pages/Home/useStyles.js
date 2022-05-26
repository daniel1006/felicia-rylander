import { makeStyles } from '@material-ui/core/styles';
import { ArrowRight } from '@material-ui/icons';

const useStyles = makeStyles(theme => {
    return {
        greetings: {
            margin: "0px",
            padding: "0px",
            height: '100%',
        },
        media: {
            backgroundColor: 'pink',
            width: '50%',
            height: '50',
            position: 'absolute',
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