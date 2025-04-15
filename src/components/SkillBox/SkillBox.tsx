import {Card, CardContent} from "@mui/material";
import {SkillType} from "../../types";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill}: props) => {

    let fontSize: string;

    if (skill.name.length >= 30) {
        fontSize = '8px';
    } else if (skill.name.length >= 20) {
        fontSize = '12px';
    } else {
        fontSize = '16px';
    }

    return (
        <Card
            sx={{
                borderRadius: '0.50%/1.50%', //different because of the size
                margin: '2%',
                display: '',
                boxShadow: '5px 3px 5px black',
                maxWidth: '40%',
                height: '80%',
                maxHeight: '80%'
            }}

        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: 1
                }}
            >
                <img
                    src={skill.imageURL}
                    alt='skill image'
                    style={{
                        height: '50%',
                        width: '60%',
                        marginBottom: '10%',
                    }}
                />
                <h3
                    style={{
                        fontWeight: '500',
                        fontSize: `${fontSize}`,
                    }}
                >
                    {skill.name}
                </h3>
            </CardContent>
        </Card>
    )
}

export default SkillBox;