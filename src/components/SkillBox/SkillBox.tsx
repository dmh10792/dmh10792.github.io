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
        <div
            style={{
                backgroundColor: '#CFCFCF',
                borderRadius: '15%',
                width: '20%',
                maxHeight: '40vh',
                minHeight: '30vh',
                padding: '1% 1% 0% 1%',
                textAlign: 'center',
                display: 'inline-block',
                margin: '1% 1% 0 1%',
                alignContent: 'center',
            }}
        >
            <img 
                src={skill.imageURL} 
                alt="" 
                style={{
                    height: '50%',
                    width: '60%',
                    marginBottom: '8%',
                    margin: `${margin}`
                }}
            />
            <h3
                style={{
                    fontWeight: '500',
                    fontSize: `${fontSize}`,
                    overflow: 'clip',
                }}
            >
                {skill.name}
            </h3>
        
        </div>
    )
}

export default SkillBox;