import { SkillType } from "../../types";

type props = {
    skill: SkillType,
}

const SkillBox = ({skill} :props) => {

    let fontSize :string;

    if(skill.name.length >= 30) {
        fontSize = '16px';
    } else if(skill.name.length >= 22) {
        fontSize = '18px';
    }else {
        fontSize = '20px';
    }

    return (
        <div
            style={{
                backgroundColor: '#CFCFCF',
                //border: '1px black solid',
                borderRadius: '15%',
                width: '20%',
                height: '20%',
                padding: '1% 1% 0% 1%',
                textAlign: 'center',
                display: 'inline-block',
                margin: '1% 1% 0 1%'
            }}
        >
            <img 
                src={skill.imageURL} 
                alt="" 
                style={{
                    height: '100%',
                    width: '100%',
                    marginBottom: '8%',
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