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
        justifyContent: 'space-around',
        
       },
       listItem: {
        fontFamily: 'Georgia, Times New Roman, Times, serif',
         marginTop: '5vmin',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
          },
       },
       menu: {
          display: 'none',
          [theme.breakpoints.down('xs')]: {
            display: 'block',
          },
       },
       list: {
           fontFamily: 'Georgia, Times New Roman, Times, serif',
           listStyleType: 'none',
           paddingRight: '20px',
           paddingLeft: '20px',
           textAlign: 'center',
           fontSize: '17vmin',
       },
       drawerList: {
           marginBottom: '9vmin',
           fontFamily: 'Georgia, Times New Roman, Times, serif',
       },
       drawer: {
         
       },
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
            fontSize:'55px',
},


}    
})

export default useStyles