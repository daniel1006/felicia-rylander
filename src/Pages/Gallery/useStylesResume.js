import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
  Box:{
    paddingTop: '10%',
    [theme.breakpoints.down('sm')]: {
            paddingTop: '25%',
        },
    overflow: 'hidden',
},
  Underline:{
    borderBottom: '5px solid #2E2D29'
},

}    
})

export default useStyles