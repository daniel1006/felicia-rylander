import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
  Box:{
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
Line: {
display:'inline-block',
},

Left: {
backgroundColor: 'rgb(28,40,65)',
textAlign:'center',
},

PofileBody: {
paddingTop: '5%',
textAlign:'justify',
},

LeftIcons: {
paddingTop: '7%',
verticalAlign: 'middle',
textAlign: 'center',
width:'100%',
},

LeftUnderline: {
paddingTop: '10%',
borderBottom: '2px solid white',
},

}    
})

export default useStyles