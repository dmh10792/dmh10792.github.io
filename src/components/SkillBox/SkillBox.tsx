import { Card, CardContent } from "@mui/material";
import { SkillType } from "../../types";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill} :props) => {

    let fontSize :string;
    let margin :string;
    const smallImages :string[] = ['Typescript', 'Flutter', 'Spring']

    if(skill.name.length >= 30) {
        fontSize = '16px';
    } else if(skill.name.length >= 20) {
        fontSize = '18px';
    }else {
        fontSize = '20px';
    }

    if(smallImages.includes(skill.name)) {
        margin = '12% 0% 12% 0%';
    } else {
        margin = '0%';
    }

    return (
        <Card 
            sx={{
                borderRadius: '5%',
                margin: '2%',
                boxShadow: '5px 3px 5px black',
                maxWidth: '90%',
                minHeight: '100%',
            }}

        >
            <CardContent
                sx={{
                    justifyItems: 'center',
                    alignContent: 'center',
                    textAlign: 'center'
                }}
            >
                <img 
                    src={skill.imageURL}
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