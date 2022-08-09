import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
    Box: {
        height: '30vh',
        background: 'black',
    },
    List: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    TradeMark: {
        color: 'grey',
        textAlign: 'center',
        marginTop: '2vh',
    },
}    
})

export default useStyles