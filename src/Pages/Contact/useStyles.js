import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
      firstDiv: {
         overflow: 'hidden',
      },
      container: {
         margin: 0,
         padding: 0,
      },
       media: {
            height: '100vh',
            objectFit: 'cover',
        },
      form: {
            position: 'absolute',
            top: '25%',
            left: '25%',
     },
}    
})

export default useStyles
