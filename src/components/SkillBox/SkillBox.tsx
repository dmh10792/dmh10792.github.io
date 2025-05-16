import {Box, CardContent, Typography} from "@mui/material";
import {SkillType} from "../../types";
import {borderRadiusInner} from "../../AppHelper.ts";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill}: props) => {

    //let fontSize: string;

    // if (skill.name.length >= 30) {
    //     fontSize = '7px';
    // } else if (skill.name.length >= 20) {
    //     fontSize = '14px';
    // } else {
    //     fontSize = '16px';
    // }

    return (
        <Box
            sx={{
                // borderRadius: borderRadiusInner, //different because of the size
                margin: '2%',
                display: 'inline-block',
                // width: '25%',
                // height: '20%',
                alignContent: 'center'
            }}
        >
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