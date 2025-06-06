import { Box, Typography } from "@mui/material";



const MobileBanner = () => {
    return (
        <Box
            className='text-center h-full mt-30'
        >
            <Typography
                variant="h1"
                color="white"
                fontFamily={'serif'}
            >
                Mobile friendly site coming soon!
            </Typography>
            <Typography
                variant='h6'
                color="white"
                mt={8}
            >
                Please check back later. Im always making improvements!
            </Typography>
        </Box>
    );
};

export default MobileBanner;