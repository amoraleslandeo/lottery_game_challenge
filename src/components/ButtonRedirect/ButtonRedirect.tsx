"use client";

import { redirect } from 'next/navigation';
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

// func to redirect the user to the home page
const ButtonRedirect = () => {
    async function redirectToSuccess() {
        redirect('/');
    }

    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50vh',
            }}
        >
            <Typography variant="h6" gutterBottom
                sx={{
                    color: '#fff'
                }}
            >
                Ocurrío un error
            </Typography>
            <Button variant="contained" onClick={redirectToSuccess}>
                Volver a la página principal
            </Button>
        </Box>
    );
}

export default ButtonRedirect;
