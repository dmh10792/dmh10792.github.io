import {Card, CardContent, Typography} from "@mui/material";
import {SkillType} from "../../types";
import {borderRadiusInner} from "../../AppHelper.ts";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill}: props) => {

    let fontSize: string;

    if (skill.name.length >= 30) {
        fontSize = '7px';
    } else if (skill.name.length >= 20) {
        fontSize = '14px';
    } else {
        fontSize = '16px';
    }

    return (
        <Card
            sx={{
                borderRadius: borderRadiusInner, //different because of the size
                margin: '2%',
                display: 'inline-block',
                boxShadow: '5px 3px 5px black',
                width: '25%',
                height: '20%',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <img
                    src={skill.imageURL}
                    alt='skill image'
                    style={{
                        flex: 1,
                        height: '50%',
                        width: '60%',
                        marginBottom: '10%',
                    }}
                />
                <Typography
                    flex={1}
                    fontSize={fontSize}
                    fontWeight={'500'}
                    fontFamily={'sans-serif'}
                >
                    {skill.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SkillBox;