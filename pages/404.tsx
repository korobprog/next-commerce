import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';

export const ErrorPage = ({ children, title = "Suite" }) => (
    <Box>
        <Typography variant="h1">Error 404</Typography>
        <Typography variant="caption">This page is not found</Typography>
        <Link href={'/'}><a>Go back</a></Link>
    </Box>
);