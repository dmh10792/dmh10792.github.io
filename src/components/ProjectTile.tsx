import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ProjectType} from "../types.ts";
import {Box} from "@mui/material";

type props = {
    project: ProjectType,
    position: number,
}

const ProjectTile = ({project, position}: props) => {

    const leftMargin = ((position + 1) % 2 === 0) ? '20%': "0%";

    return (
        <Card sx={{
            display: 'flex',
            width: '80%',
            height: '28%',
            mb: 7,
            marginLeft: `${leftMargin}`,
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: 500 }}
                image={project.imageURL}
                alt="Project Image"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {project.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary', mt: 1 }}
                    >
                        {project.description}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProjectTile;