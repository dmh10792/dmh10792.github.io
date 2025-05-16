
import Typography from '@mui/material/Typography';
import {ProjectType} from "../types.ts";
import {Box, Stack} from "@mui/material";
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

type props = {
    project: ProjectType,
}

const ProjectTile = ({project}: props) => {

    const images :React.ReactElement[] = [];

    useEffect(() => {
        project.images.forEach((imageUrl) => {
            images.push(
            <img 
                src={imageUrl} 
                alt={`${project.title} slideshow image`}
                style={{
                    width: '100%',
                }}
            />
            )
        })
    });

    return (
        <Stack
            direction={"row"}
            sx={{
                marginX: '10%',
                height: '20%',
            }}
        >
          
            <Carousel
                navButtonsWrapperProps={{
                    style: {
                        
                    }
                }}
                sx={{
                    width: '50%',
                    height: '100%',
                    flex: '1 0 auto',
                    marginRight: '5%'
                }}
            >
                {images}
            </Carousel>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                fontFamily: 'sans-serif',
                marginTop: '4%'
                }}>
                    <Typography
                        variant={'h4'}
                        color={'white'}
                        fontFamily={'sans-serif'}
                        fontStyle={'italic'}
                        mb={2}
                    >
                        {project.title}
                    </Typography>
                    <Typography
                        variant={'h5'}
                        color={'white'}
                        fontFamily={'sans-serif'}
                        fontSize={'large'}
                        ml={1}
                    >
                        {project.description}
                    </Typography>
            </Box>
        </Stack>
    );
};

export default ProjectTile;