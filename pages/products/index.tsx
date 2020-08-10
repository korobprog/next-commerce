import { Box, Typography } from '@material-ui/core';
import { MainLayout } from '../../components/MainLayout';
import Link from 'next/link';

export default function Products({ text }) {
    return (
        <MainLayout>
            <Box>
                <Typography variant="h1">
                    Products
                </Typography>
                <Typography variant="caption">
                    {text}
                </Typography>
                <Link href="/product/22"><a>to 22</a></Link>
            </Box>
        </MainLayout>
    )
}

Products.getInitialProps = async () => {
    return { props: { text: 'some text from datebase' } }
}