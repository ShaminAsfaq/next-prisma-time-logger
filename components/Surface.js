import { Container } from "@mui/material";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";

const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    // sx={{ height: '100vh' }}
                    style={parentStyle}
                >
                    <div style={circleStyle}></div>
                    <Typography variant="h3" component="div">
                        00:00:00
                    </Typography>

                    <div style={buttonStyle}>
                        <Button variant="contained">Start</Button>
                    </div>
                    <div style={{ position: 'absolute', top: '70%', margin: '5%' }}>
                        <Alert severity="error">Just sitting there and eating grass. - Make it functional</Alert>
                    </div>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export {
    Home as default
}

const buttonStyle = {
    position: 'absolute',
    top: '65%',
    margin: '2%'

}

const circleStyle = {
    height: '270px',
    width: '270px',
    backgroundColor: '#fff',
    border: '8px solid grey',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: '-999',
    margin: '2%'
}

const parentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}