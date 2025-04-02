import {Box} from "@mui/material";
import ProjectTile from "../components/ProjectTile.tsx";
import {ProjectType} from "../types.ts";
import {projects} from "../helpers/projects.ts";

const Projects = () => {

    const testProject: ProjectType = {
        title: 'Test',
        description: 'This is a test project',
        imageURL: "/src/assets/images/placeholder.jpg"
    }

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
            }}
        >
            {projectCards}
            <ProjectTile project={testProject} position={1}/>
            <ProjectTile project={testProject} position={2}/>
            <ProjectTile project={testProject} position={3}/>
            <ProjectTile project={testProject} position={4}/>
            <ProjectTile project={testProject} position={5}/>
            <ProjectTile project={testProject} position={6}/>
            <ProjectTile project={testProject} position={7}/>
            <ProjectTile project={testProject} position={8}/>
            <ProjectTile project={testProject} position={9}/>
            <ProjectTile project={testProject} position={10}/>
        </Box>
    )
}

export default Projects;