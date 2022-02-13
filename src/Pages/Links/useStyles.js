import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
      greetings: {
         height: '100%',
         margin: 0,
         padding: 0,
      },
      container: {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'space-around',
         alignItems: 'center',
         position: 'relative',
      },
        media: {
            height: '100vh',
        },
    
}    
})

export default useStyles