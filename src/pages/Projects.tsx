import {Box, Typography} from "@mui/material";
import ProjectTile from "../components/ProjectTile.tsx";
import {projects} from "../helpers/projects.ts";

const Projects = () => {

    const projectCards: JSX.Element[] = projects.map((project, key) => {
        return <ProjectTile key={key} project={project} position={key}/>
    })

    return (
        <Box
            component={"section"}
            sx={{
                justifyItems: 'center',
            }}
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
            {projectCards}
        </Box>
    )
}

export default Projects;