import {Box} from "@mui/material";
import ProjectTile from "../components/ProjectTile.tsx";
import {projects} from "../helpers/projects.ts";

const Projects = () => {

    const projectCards: JSX.Element[] = projects.map((project, key) => {
        return <ProjectTile key={key} project={project} position={key}/>
    })

    return (
        <Box
            sx={{
                textAlign: 'start',
                mt: '3vh',
                width: '79vw',
                height: '97vh',
                ml: '3vw',
                overflowY: 'scroll',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                fontFamily: 'sans-serif',
            }}
        >
            {projectCards}
        </Box>
    )
}

export default Projects;