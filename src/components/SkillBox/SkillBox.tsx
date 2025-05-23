import {Box, Typography} from "@mui/material";
import {SkillType} from "../../types";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill}: props) => {

    return (
        <Box className="flex flex-col items-center min-h-40 mx-10 rounded-lg max-w-48 pt-5" >
            <img
                src={skill.imageURL}
                alt='skill image'
                className="h-20 w-25 mb-5"
            />
            <Typography
                flex={1}
                fontSize={'1em'}
                fontWeight={'500'}
                fontFamily={'sans-serif'}
                color="white"
                align="center"
            >
                {skill.name}
            </Typography>
        </Box>
    )
}

export default SkillBox;