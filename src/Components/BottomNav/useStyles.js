import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
    Box: {
        height: '30vh',
    },
    List: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ListItem: {
        listStyleType: 'none',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        fontSize: '2rem',
        marginTop: '4vh',
    },
    ListItemMiddle: {
        listStyleType: 'none',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        fontSize: '2rem',
        padding: '3rem',
        marginTop: '4vh',
    },
    TradeMark: {
        color: 'grey',
        textAlign: 'center',
        marginTop: '2vh',
    },
}    
})

export default useStyles