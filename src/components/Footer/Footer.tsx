import React from 'react'
import Image from "next/image";
import { Box, Typography, Link as LinkMui } from '@mui/material'

const Footer = () => {
    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                alignItems: 'center',
                m: '0px auto',
                gap: 2,
                pb: '30px'
            }}
        >
            <Typography variant="body2" color={'#fff'} >Creado por: Alejandro Morales</Typography>
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    gap: 2
                }}
            >
                <LinkMui
                    href="https://github.com/amoraleslandeo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/github.svg"
                        alt="Window icon"
                        width={40}
                        height={40}
                    />
                </LinkMui>
                <LinkMui
                    href="https://www.linkedin.com/in/alejandro-morales-landeo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/linkedin.svg"
                        alt="Globe icon"
                        width={40}
                        height={40}
                    />
                </LinkMui>
            </Box>
        </Box>
    )
}

export default Footer