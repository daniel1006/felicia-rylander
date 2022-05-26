import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           flexGrow: 1,
       },
       appBar:{
        backgroundColor: 'transparent',
        height: '15vh',
        boxShadow: 'none',
        [theme.breakpoints.down('xs')]: {
         alignItems: 'flex-end',
       },
       },

       toolBar: {
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'end',
        marginRight:"5vmin",
        [theme.breakpoints.down('md')]: {
         marginRight:"0",
       },
       },
       listItem: {
            textDecoration:"none",
            color:"rgba(0, 0, 0, 0.87)",
            fontSize:'3vmin',
            [theme.breakpoints.down('xs')]: {
              fontSize:'6vmin',
          },
       },
  
// drawer menu
       MenuItem: {
            width: "15vmax",
           [theme.breakpoints.down('xs')]: {
            width: "18vmax",
          },
            fontFamily: 'Georgia, Times New Roman, Times, serif',
            listStyleType: 'none',
            fontSize: '3vmin',
           [theme.breakpoints.down('xs')]: {
            fontSize: "9vmin",
            width: '25vmax'
          },
      },

      Link: {
            fontSize:'3vmin',
           [theme.breakpoints.down('xs')]: {
            fontSize:'6vmin',
          },
},

}    
})

export default useStyles