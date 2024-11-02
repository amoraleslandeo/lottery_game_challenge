"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import { Box, Divider, Typography } from '@mui/material';

type NumberGridProps = {
    id: string;
    maxNumbers: number;
    totalNumbers: number;
}

const NumberGrid = ({ id, maxNumbers, totalNumbers }: NumberGridProps) => {
    const router = useRouter()

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    // array of numbers from 1 to 69
    const numbers = []
    for (let i = 1; i <= totalNumbers; i++) {
        numbers.push(i)
    }

    // func to control ticket saving and redirecting to success
    const handleSaveTicket = async () => {
        const url = `https://interview-api.lottobillions.com/draws/${id}/tickets`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    numbers: selectedNumbers
                }),
            });
            if (response.ok) {
                router.push('/success')
            } else {
                alert('Ocurrio un error al guardar')
            }
        } catch (error) {
            alert(error)
            console.error('Error sending data:', error);
        }
    }

    const handleNumberSelection = (number: number) => {
        setSelectedNumbers((prevSelected) => {
            if (prevSelected.includes(number)) {
                return prevSelected.filter((num) => num !== number);
            } else if (prevSelected.length < maxNumbers) {
                return [...prevSelected, number];
            }
            return prevSelected;
        });
    };

    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
                p: 3,
                borderRadius: 2,
                gap: 2,
            }}
        >
            <Typography component='p' variant='body2' color={'#585972'}>Elige tus {maxNumbers} números</Typography>
            <Box
                component='div'
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' },
                    gap: '10px',
                    pb: 2,
                }}
            >
                {numbers.map((number) => (
                    <Button
                        key={number}
                        onClick={() => handleNumberSelection(number)}
                        sx={{
                            width: 35,
                            height: 35,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            textAlign: 'center',
                            p: 0,
                            minWidth: 0,
                            border: selectedNumbers.includes(number) ? '1px solid #0097FF' : '1px solid #ccc',
                            backgroundColor: selectedNumbers.includes(number) ? '#0097FF' : '#fff',
                            fontSize: '14px',
                            color: selectedNumbers.includes(number) ? '#fff' : '#585972',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: selectedNumbers.includes(number) ? '#0097FF' : '#f0f0f0',
                            }
                        }}
                    >
                        {number}
                    </Button>
                ))}
            </Box>
            <Divider />
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    mt: 1,
                    mb: 2,
                    justifyContent: 'space-evenly'
                }}
            >
                {Array.from({ length: maxNumbers }).map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            p: 0,
                            minWidth: 0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '20px',
                            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                            border: selectedNumbers[index] ? '1px solid #0097FF' : '1px dashed #ccc',
                            backgroundColor: selectedNumbers[index] ? '#0097FF' : '#fff',
                            color: selectedNumbers[index] ? '#fff' : '#585972',
                        }}
                    >
                        {selectedNumbers[index] || null}
                    </Box>
                ))}
            </Box>
            <Button
                variant="contained"
                onClick={handleSaveTicket}
                disabled={selectedNumbers.length !== maxNumbers}
                sx={{
                    backgroundColor: 'red',
                    '&:hover': {
                        backgroundColor: '#007ACC', // Color de fondo en hover
                        color: '#e0e0e0',           // Color de texto en hover
                    },
                }}
            >
                Comprar
            </Button>
        </Box>
    );
};

export default NumberGrid;
