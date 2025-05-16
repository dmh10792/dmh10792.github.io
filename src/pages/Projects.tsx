import {Box, IconButton, Stack, Typography} from "@mui/material";
import ProjectTile from "../components/ProjectTile.tsx";
import {projects} from "../helpers/projects.ts";
import { useState } from 'react';

const Projects = () => {

    const projectCards: JSX.Element[] = projects.map((project, key) => {
        return <ProjectTile key={key} project={project}/>
    })

    const projectsLength: number = projectCards.length;
    
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<JSX.Element>(projectCards[0]);

    const moveSelectionLeft = () => {
        if(selectedIndex == 0) {//if at the beginning of the list
            //move to the end
            setSelectedProject(projectCards[projectsLength - 1]);
            setSelectedIndex(projectsLength - 1);
        } else {
            //move to the left
            setSelectedProject(projectCards[selectedIndex - 1]);
            setSelectedIndex(selectedIndex - 1);
        }
    }

    const moveSelectionRight = () => {
        if(selectedIndex == projectsLength - 1) {//if at the end
            //move to the beginning
            setSelectedProject(projectCards[0]);
            setSelectedIndex(0);
        } else {
            //move to the right
            setSelectedProject(projectCards[selectedIndex + 1]);
            setSelectedIndex(selectedIndex + 1);
        }
    }

    return (
        <Box
            component={"section"}
            sx={{
                justifyItems: 'center',
                marginY: '10%',
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

            <Stack direction={"row"}>
                <IconButton onClick={moveSelectionLeft} >
                    <img 
                        src='/src/assets/icons/icons8-previous-48.png'
                        alt='Move left icon'
                        style={{
                            width: '100%',
                        }}
                    />
                </IconButton>
                {selectedProject}
                <IconButton onClick={moveSelectionRight} >
                    <img 
                        src='/src/assets/icons/icons8-right-button-48.png'
                        alt='Move right icon'
                        style={{
                            width: '100%',
                        }}
                    />
                </IconButton>
            </Stack>
            
        </Box>
    )
}

export default Projects;