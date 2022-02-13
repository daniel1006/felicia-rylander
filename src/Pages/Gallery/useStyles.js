import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
      root: {
         paddingTop: '10%',
         display: 'flex',
         justifyContent: 'space-around',
         flexDirection: 'column',
         alignItems: 'center',
         overflow: 'hidden',
       },
       gridList: {
         width: '75%',
         height: '100%',
         [theme.breakpoints.down('sm')]: {
            width: '90%',
            overflow: 'hidden',
          },
       },
       firstImage: {
         position: 'relative',
         width: '100%',
         bottom: '350px',
       },
        link: {
        paddingTop:'5%',
      },
}    
})

export default useStyles