import React from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';

const PurchasePage = async () => {

    // Variable para iniciar el loader
    const loading = false;

    return (
        <Box
            component='main'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: '40px',
                m: '0px auto',
            }}
        >
            {loading ? ( // Condición para mostrar el loader
                <CircularProgress />
            ) : (
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                        alignItems: 'center',
                    }}
                >
                    <Link href={'/'} style={{ textDecoration: 'none', textAlign: 'center' }}>
                        <CardMui sx={{ maxWidth: 600 }}>
                            <CardActionArea>
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <CheckCircleIcon color="success" sx={{ fontSize: 60 }} />
                                    <Typography component='h4' variant='h4' color={'#585972'} align='center'>
                                        ¡Felicidades! Tu compra ha sido exitosa. ¡Te deseamos mucha suerte en el juego!
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </CardMui>
                    </Link>
                </Box>
            )}
        </Box>
    );
}

export default PurchasePage;