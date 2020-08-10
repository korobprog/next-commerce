import { Box, Typography } from '@material-ui/core';
import { MainLayout } from '../../components/MainLayout';

export default function Product({id}) {
    return (
        <MainLayout>
            <Box>
                <Typography>
                    Product {id}
            </Typography>
            </Box>
        </MainLayout>
    )
}

// Product.getInitialProps = ({query}) => {
//     return {props: {id: query.id}}
// }