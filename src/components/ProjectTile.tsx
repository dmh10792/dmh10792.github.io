
import {ProjectType} from "../types.ts";
import {Stack} from "@mui/material";
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type props = {
    project: ProjectType,
}

const ProjectTile = ({project}: props) => {

    const images :React.ReactElement[] = [];

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

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
        >

            <Carousel 
                className="min-w-150 min-h-80 mr-10"
                responsive={responsive}
                autoPlaySpeed={2500}
                transitionDuration={1000}
                autoPlay={true}
                infinite={true}
                arrows={false}
            >
                {images}
            </Carousel>

            <div className='w-full/2 text-white font-sans'>
                <h2 
                    className='text-3xl pb-4'
                >
                    {project.title}
                </h2>
                <p className='text-xl'>
                    {project.description}
                </p>
            </div>
        </Stack>
    );
};

export default ProjectTile;