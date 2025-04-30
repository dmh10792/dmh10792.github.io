import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {ProjectType} from "../types.ts";
import {Box} from "@mui/material";
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

type props = {
    project: ProjectType,
    position: number,
}

const ProjectTile = ({project, position}: props) => {

    const leftMargin = ((position + 1) % 2 === 0) ? '15%': "0%";
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
        <Card sx={{
                display: 'flex',
                width: '85%',
                height: '27%',
                mb: 7,
                marginLeft: `${leftMargin}`,
            }}
        >
          
            <Carousel
                navButtonsWrapperProps={{
                    style: {
                        position: 'unset',
                    }
                }}
                sx={{
                    width: '50%',
                    height: '100%',
                    flex: '1 0 auto',
                }}
            >
                {images}
            </Carousel>
            <Box sx={{ display: 'flex', flexDirection: 'column', fontFamily: 'sans-serif' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {project.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        component="div"
                        sx={{ 
                            color: 'text.secondary', 
                            mt: 1,
                            fontSize: "0.9em",
                            height: '80%' ,
                            overflowY: 'scroll',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {project.description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProjectTile;