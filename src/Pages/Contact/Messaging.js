import React from 'react';
import { TextField, Button, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, CircularProgress, } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import useStyles from './useStyles';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

import './style.css';

init("user_DnQCMfVnzpijnE8OO27EX")

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const Messaging = () => {
    const classes = useStyles();
    
    // email api
    const { register, formState: { errors }, handleSubmit } = useForm();
  

    const onSubmit = (data) =>  {
        sendForm('default_service', 'template_zafyutb', '#service_8il6dbb')
        .then(function(response) {
        document.location = "/thankyou"
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
      }

      // loading animation

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();


  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

      
    return (
      <div className={classes.firstDiv}>

      <div className="backGround">

      <style>{`body { margin: 0px; padding: 0px;}`}</style>

          <MuiThemeProvider theme={theme}>
          </MuiThemeProvider> 

          <Grid className={classes.grid3} container justifyContent='center' alignItems='center' direction="column"> 
      
          <div className={classes.whiteBackground}> </div>

          <Typography variant='h2' className={classes.contactTitle}>Contact</Typography>
          <Typography variant='h5' className={classes.contactTitle}>daniellanthier2@gmail.com</Typography>
          <Typography className={classes.Icons}> <FacebookIcon/> <InstagramIcon/> </Typography>

        <Grid className={classes.gridItem} item xs={12} sm={12} md={12} lg={12}>
         <form className={classes.form}
               id='service_8il6dbb'
               onSubmit={handleSubmit(onSubmit)}>       

           <div>
                <TextField
                       className={classes.textInput}
                       variant="outlined"
                       margin="normal"
                       label="Name"
                       type='text' 
                       name='user_name' 
                       error={errors.user_name}
                       helperText={errors.user_name && "Name is required"}
                       {...register('user_name', { required: true, maxLength:20})}/> 

                <TextField 
                          className={classes.textInput}
                          margin="normal"
                          variant="outlined"
                          name='topic' 
                          label="Subject" 
                          error={errors.topic}
                          helperText={errors.topic && "Must enter a subject matter"}
                          {...register('topic', { required: true, maxLength:20})}/> 
          </div>

           <div> 
                <TextField 
                      className={classes.textInput}
                      variant="outlined"
                       margin="normal"
                       label="Email"
                       type='email' 
                       name='user_email' 
                       error={errors.user_email}
                       helperText={errors.user_email && "Email is not valid"}
                      {...register('user_email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}/> 
          </div>

           <div>
                <TextField 
                          className={classes.message}
                          margin="normal"
                          variant="outlined"
                          name='message' 
                          label="Message" 
                          multiline 
                          error={errors.message}
                          helperText={errors.message && "Must enter a message"}
                          {...register('message', { required: true, maxLength:3000})}/> 
           </div>


               <div className={classes.wrapper}>
               <Button  className={classes.button}
                        variant="outlined" 
                        size="large" 
                        type='submit' 
                        value='Send'  
                        onClick={handleButtonClick}>Send</Button>

                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>

               </form>
        </Grid>
      </Grid>
     </div> 
    </div>
    )
}

export default Messaging
