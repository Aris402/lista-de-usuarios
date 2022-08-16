import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Login = (props:any) => {
    return(
        <Box className="alignMent"
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <h1 className='siteName'>Your.site</h1>
            <TextField
            id="filled-password-input"
            label="E-mail"
            type="text"
            autoComplete="current-password"
            variant="filled"
            />
            <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            />
            <Stack direction="row" spacing={2}>
                <Button variant="contained" className='loginButton'>Login</Button>
            </Stack>
        </Box>
    )
}

export default Login;