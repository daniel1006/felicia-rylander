import React from 'react';
import { Card, Grid, Typography,  CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes,} from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
    const classes = useStyles();
    return (
      <div>
      <style>{`body { margin: 0px; padding: 0px;}`}</style>

        <Grid className={classes.greetings}>
            <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.container}>
               <CardMedia  component="img"
                           src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/36609170_10217095190877793_8522792377578946560_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=qhr10fgGfQ4AX9C4aOT&_nc_ht=scontent-arn2-1.xx&oh=0ec2609052d7b7ef3730f54b3defaf30&oe=60F1862E"
                           title="Services"
                           className={classes.media} /> 
            <MuiThemeProvider theme={theme}>
              <Typography variant="h1" className={classes.title}>Felicia</Typography> 
              <Typography variant="h1" className={classes.title2}>Rylander</Typography> 
            </MuiThemeProvider>  
              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Home
