import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
      firstDiv: {
         overflow: 'hidden',
      },
      container: {
         height:'100%',
      },
      cardStyle: {
         position: 'relative',
         borderRadius: 0,
      },
       media: {
           height: '100vh',
           
        },
      form: {
            position: 'absolute',
            top: '25%',
            left: '25%',
     },
}    
})

export default useStyles
