import {Box, Typography} from "@mui/material";
import {SkillType} from "../../types";
// import {borderRadiusInner} from "../../AppHelper.ts";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill}: props) => {

    return (
        <Box className="text-center bg-gray-300 min-h-40 mx-10 rounded-lg" >
                <img
                    src={skill.imageURL}
                    alt='skill image'
                    style={{
                        flex: 1,
                        height: '40%',
                        width: '30%',
                        marginBottom: '5%',
                        alignContent: "center"
                    }}
                />
                <Typography
                    flex={1}
                    fontSize={'1em'}
                    fontWeight={'500'}
                    color="white"
                    fontFamily={'sans-serif'}
                    align="center"
                >
                    {skill.name}
                </Typography>
        </Box>
    )
}

export default SkillBox;