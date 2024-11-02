import React from 'react'
import Link from 'next/link';
import formatCurrency from '../../helpers/formatCurrency'
import CardMui from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

type CardProps = {
    id: string;
    image: string;
    name: string;
    price: number;
}

export const Card = ({ image, name, price, id }: CardProps) => {

    return (
        <Link href={`/${id}/details`} style={{ textDecoration: 'none', textAlign: 'center' }}>
            <CardMui sx={{ maxWidth: 313 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={310}
                        image={image}
                        alt={name}
                    />
                    <CardContent>
                        <Typography component='h2' gutterBottom variant='h2' color={'#001B43'}>{name}</Typography>
                        <Typography component='h2' gutterBottom variant='h4' color={'gray'}>¡Gran Pozo!</Typography>
                        <Typography component='h5' variant="h5" color={'#001B43'} >{formatCurrency.format(price)}</Typography>
                    </CardContent>
                </CardActionArea>
            </CardMui>
        </Link>
    )
}
