import Head from 'next/head';
import { Grid, Box, CssBaseline } from '@material-ui/core';
import { Navbar } from './Navbar';

export const MainLayout = ({ children, title = "Suite" }) => (
    <>
        <Head>
            <title>{title} | Next Commerce</title>
            <meta name="keywords" content="next,nextjs,e-commerce" />
            <meta name="discription" content="New e-commerce project for your business" />
            <meta charSet="utf-8" />
        </Head>
        <CssBaseline />
        <nav>
            <Navbar />
        </nav>
        <main>
            <Box minHeight="85vh" bgcolor="#CCC" display="flex" alignItems="center" justifyContent="center">
                {children}
            </Box>
        </main>
        <footer>
        </footer>
    </>
);