import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           flexGrow: 1,
       },
       appBar:{
        backgroundColor: 'transparent',
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
           listStyleType: 'none',
           paddingRight: '20px',
           paddingLeft: '20px',
           textAlign: 'center',
           fontSize: '17vmin',
       },
       drawerList: {
           marginBottom: '9vmin',
       },
       drawer: {
         width: '40%',
       }
}    
})

export default useStyles