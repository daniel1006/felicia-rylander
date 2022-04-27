import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
  Box:{
    paddingTop: '15%',
    padding:'5%',
    [theme.breakpoints.down('sm')]: {
            paddingTop: '30%',
            padding:'0%',
        },
    overflow: 'hidden',
},
  Grid: {
    overflowY:'scroll',
},

Title:{
backgroundColor:'#F5F5DC',
textAlign: 'right',
},

TextTitle: {
},

TextBlock: {
width: '75%',
float: 'right',
textAlign: 'left',
textAlign:'justify',
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

RightIcon: {
float: 'left',
fontSize: '6vmax'
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

Skills: {
paddingTop: '5%',
},

}    
})

export default useStyles