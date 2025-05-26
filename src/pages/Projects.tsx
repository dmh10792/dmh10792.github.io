import {Box,Typography} from "@mui/material";
import ProjectTile from "../components/ProjectTile.tsx";
import {projects} from "../helpers/projects.ts";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {

    const projectCards: JSX.Element[] = projects.map((project, key) => {
        return <ProjectTile key={key} project={project}/>
    })

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

    return (
        <Box className="flex flex-col items-center w-full place-items-center
                my-50"
            component={"section"}
        >
            <Typography
                variant={'h3'}
                color={'white'}
                fontFamily={'sans-serif'}
                fontWeight={'lighter'}
                mb={5}
            >
                Projects
            </Typography>

            <Carousel 
                className="min-w-3/4 max-w-3/5"
                responsive={responsive}
                infinite={true}
                showDots={true}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={2500}
                transitionDuration={1000}
            >
                {projectCards}
            </Carousel>;

            
        </Box>
    )
}

export default Projects;