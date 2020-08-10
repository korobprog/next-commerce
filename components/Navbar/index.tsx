import Link from 'next/link';
import { Grid, Box, Typography } from '@material-ui/core';
import MenuListComposition from './Menu';

export const Navbar = () => (
    <>
        <Box height="104px" bgcolor="#FFF" display="flex" alignItems="center" justifyContent="space-around">
            <Typography variant="h6">E-COMMERCE NEXT</Typography>
            <Box display="flex" alignItems="end" flexDirection="column">
                <Typography variant="caption">Обслуживание клиентов</Typography>
                <Typography variant="subtitle1">8 (999) 777-77-77</Typography>
            </Box>
        </Box>
        <Box height="54px" bgcolor="primary" display="flex" alignItems="center" justifyContent="space-around">
            <MenuListComposition />
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/products'}><a>Products</a></Link>
        </Box>
    </>
);