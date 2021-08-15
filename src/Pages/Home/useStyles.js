import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
    greetings: {
        height: '100%',
        margin: 0,
        padding: 0,
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
           position: 'absolute',
           marginLeft: '15%',
           [theme.breakpoints.down('sm')]: {
            marginLeft: '30%',
          },
       },
       title2: {
        position: 'absolute',
        marginTop: '10%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '20%',
          },
    }
}    
})

export default useStyles