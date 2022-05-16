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

PageTitle: {
float: 'center',
width: '85%',
marginTop: '5%',
marginLeft: '3%',
},

TextTitle: {
float: 'right',
width: '85%',
textAlignLast:'left',
},

TextBlock: {
paddingTop: '1%',
width: '85%',
float: 'right',
textAlign: 'left',
textAlign:'justify',
},

TextDate: {
display: 'inline-block'
},

EducationLine: {
width: '85%',
backgroundColor: 'rgb(28,40,65)',
float: 'right',
height: '2px',
border: 'none',
marginBottom:'5vh',
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