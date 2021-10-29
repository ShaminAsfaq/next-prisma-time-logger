import { Container } from "@mui/material";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";

import { useState } from "react";

const Home = () => {
    const [startLog, setStartLog] = useState('');
    const [endLog, setEndLog] = useState('');


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    // sx={{ height: '100vh' }}
                    style={parentStyle}
                >
                    <div className="inner">
                        <Typography style={timerStyle} variant="h3" component="div">
                            00:00:00
                        </Typography>
                    </div>
                    <div style={buttonStyle}>
                        <Button variant="contained">Start</Button>
                    </div>
                    <div style={alertStyle}>
                        <Alert severity="error">Just sitting there and eating grass. - Make it functional</Alert>
                    </div>
                </Box>
                <div className="ocean">
                    <div classNameclass="wave"></div>
                    <div className="wave"></div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export {
    Home as default
}

const alertStyle = {
    // position: 'absolute',
    // top: '70%',
    margin: '2%'
}

const timerStyle = {
    color: 'white'
}

const buttonStyle = {
    // position: 'absolute',
    // top: '65%',
    margin: '5%'

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
    justifyContent: 'center',
    flexDirection: 'column',
    width: '500px'
}