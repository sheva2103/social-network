import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TextField, Button, Grid } from '@mui/material';
import { Form, Field } from 'react-final-form'
import { Input } from './../common/formControl/FormControl';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
/////////////////////////////////////////////////form
    const MyForm = ({typeButton}) => {

        return (
            // <form name='login'>
            //     <Grid container direction={'column'} spacing={2}>
            //         <Grid item xs={12}>
            //             <TextField fullWidth autoFocus id="outlined-basic" label="Логин" variant="outlined" sx={{'& input': { color: 'orange'}}}/>
            //       </Grid>
            //       <Grid item xs={12}>
            //         <TextField fullWidth id="outlined-basic" label="Пароль" variant="outlined" sx={{'& input': { color: 'orange'}}}/>
            //       </Grid>
            //       <Grid item xs={12}>
            //         <Button variant="contained">{typeButton}</Button>
            //       </Grid>
            //     </Grid>
            // </form>




  //           <Form
  //   onSubmit={(e) => console.log(e)}
    
  //   render={({ handleSubmit }) => (
  //     <form onSubmit={handleSubmit}>
  //       <h2>Simple Default Input</h2>
  //       <div>
  //         <label>11111</label>
  //         <Field name="firstName" component={() => <Input error label='Логин'/>} />
  //       </div>

  //       <h2>Render Function</h2>
  //       <Field
  //         name="bio"
  //         render={({ input, meta }) => (
  //           <div>
  //             <label>Bio</label>
  //             <textarea {...input} />
  //             {meta.touched && meta.error && <span>{meta.error}</span>}
  //           </div>
  //         )}
  //       />

  //       <h2>Render Function as Children</h2>
  //       <Field name="phone">
  //         {({ input, meta }) => (
  //           <div>
  //             <label>Phone</label>
  //             <input type="text" {...input} placeholder="Phone" />
  //             {meta.touched && meta.error && <span>{meta.error}</span>}
  //           </div>
  //         )}
  //       </Field>

  //       <button type="submit">Submit</button>
  //     </form>
  //   )}
  // />
              <Form onSubmit={(e) => console.log(e)}
                validate={false}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Grid container direction={'column'} spacing={2}>
                        <Grid item xs={12}>
                          <Field name='login' component={() => <Input label='Логин'/>}/>
                        </Grid>
                        <Grid item xs={12}>
                          <Field name='login' component={() => <Input label='Пароль'/>}/>
                        </Grid>
                        <Grid item xs={12}>
                          <Button variant="contained" type='submit'>{typeButton}</Button>
                        </Grid>
                      </Grid>
                    </form>
                  )}>

              </Form>
)
        
    }


//////////////////////////////////////////////////

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Войти" {...a11yProps(0)} sx={{color: 'orange'}}/>
          <Tab label="Регистрация" {...a11yProps(1)} sx={{color: 'orange'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
    </Box>
  );
}