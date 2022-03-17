import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
      container: {
         overflow:'hidden',
         position:'relative',
       },
      root: {
         paddingTop: '10%',
         display: 'flex',
         justifyContent: 'space-around',
         flexDirection: 'column',
         alignItems: 'center',
         overflow:'hidden',
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
         lenght: '800px',
         bottom: '5px',
        [theme.breakpoints.down('sm')]: {
            right:'20%',
          },
       },
        link: {
        paddingTop:'5%',
      },
}    
})

export default useStyles