import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDayjs}  from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@material-ui/core/styles'





const materialTheme = createTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: 'red',
            },
        },
        MuiPickersDay: {
            day: {
                color: 'red',

            },
            daySelected: {
                backgroundColor: 'red',
            },
            dayDisabled: {
                color: '#ccc',
            },
            current: {
                color: 'red',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#33abb6',
            },
        },
    },
});
 
export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <div>
        <h3 className='headding' style={{cursor:'pointer'}}>Date picker</h3>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <ThemeProvider theme={materialTheme}>
      <DatePicker
        label="Pick A Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} sx={{cursor:'pointer'}} />}
      />
      </ThemeProvider>
          
    </LocalizationProvider>
    </div>
  );
}

