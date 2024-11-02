import React from 'react'
import Image from 'next/image';
import ButtonRedirect from '@/components/ButtonRedirect/ButtonRedirect';
import NumberGrid from '@/components/NumberGrid/NumberGrid';
import formatCurrency from '@/helpers/formatCurrency';
import { TDraw } from '@/types/types';
import { Box, Typography } from '@mui/material';

const DetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await (params)).id

    // api to fetch information about the draw
    const url = `https://interview-api.lottobillions.com/draws/${id}`;
    // get request to the api
    const res = await fetch(url, { headers: { 'accept': 'application/json' } });

    // if the response is not successful (Error), show a redirect button
    if (!res.ok) {
        return <ButtonRedirect />
    }

    const data = await res.json(); // convert the api res to JSON format
    const drawInfo: TDraw = data // assign the draw data to the variable

    const PrintDetail = () => {
        return <>
            <Image src={drawInfo.logo} alt={drawInfo.name} width={300} height={300} />
            <Typography gutterBottom variant='h3' color={'#001B43'}>Jugar {drawInfo.name}</Typography>
            <Typography gutterBottom variant='h4' color={'#fff'}>{formatCurrency.format(drawInfo.jackpot.amount)} Millones</Typography>
            <Typography variant='h5' color={'#001B43'}>{formatCurrency.format(drawInfo.pricing.amount)} por línea</Typography>
        </>
    }

    return (
        <Box
            component='main'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: '40px',
                maxWidth: '1200px',
                height: '100%',
                m: '0px auto',
            }}
        >
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '50px',
                    pt: '30px',
                    pb: '30px'
                }}
            >
                <Box
                    component='div'
                    sx={{
                        display: { xs: 'none', lg: 'flex' },
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <PrintDetail />
                </Box>
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}
                >
                    <Box
                        component='div'
                        sx={{
                            display: { xs: 'flex', lg: 'none' },
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                    >
                        <PrintDetail />
                    </Box>
                    <NumberGrid
                        id={id}
                        maxNumbers={drawInfo.specification.maxNumbers}
                        totalNumbers={drawInfo.specification.totalNumbers} />
                </Box>
            </Box>
        </Box>
    )
}

export default DetailPage