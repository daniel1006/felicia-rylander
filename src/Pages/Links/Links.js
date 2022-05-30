import React from 'react';
import { Card, Grid, CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes, } from '@material-ui/core';
import useStyles from './useStyles';
import './Style.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Links = () => {
    const classes = useStyles();
    return (
        <div>
        <style>{`body { margin: 0px; padding: 0px;}`}</style>
  
          <Grid className={classes.greetings}>
              <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
                <Card className={classes.container}>
                 <CardMedia  component="img"
                             src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                             title="Services"
                             className={classes.media} /> 
              <MuiThemeProvider theme={theme}>
                 <div className="list">
                   <div className="btn">Facebook</div>
                   <div className="btn">Instagram</div>
                   <div className="btn">OnlyFans</div>
                 </div>
              </MuiThemeProvider>  
                </Card>     
              </Grid>
          </Grid>
         </div>
    )
}

export default Links
