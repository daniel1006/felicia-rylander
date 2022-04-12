import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
  Box:{
    textAlign:'center',
    paddingTop: '10%',
    padding:'5%',
    [theme.breakpoints.down('sm')]: {
            paddingTop: '25%',
            padding:'0%',
        },
    overflow: 'hidden',
},
  Grid: {
    overflowY:'scroll',
},
  Underline:{
    borderBottom: '5px solid #2E2D29'
},
  Dot: {
    borderRadius:'75%',
    backgroundColor:'grey',
    display:'inline-block',
    height:'18px',
    weight:'20px',
    paddingLeft:'15px',
    marginLeft:'5px',
},
  Cdot: {
    borderRadius:'75%',
    backgroundColor:'blue',
    display:'inline-block',
    height:'18px',
    weight:'20px',
    paddingLeft:'15px',
    marginLeft:'5px',
},
Line: {
display:'inline-block',
},
}    
})

export default useStyles