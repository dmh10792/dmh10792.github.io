import SkillBox from "../components/SkillBox/SkillBox";
import { skills } from "../helpers/skills";

const Skills = () => {

    const skillComponents = skills.map((skill, key) => {
        return <SkillBox key={key} skill={skill}/>
    })

    return (
        <>
            <div style={{
                alignContent: 'center',
                textAlign: 'center',
                display: 'block',
                maxHeight: '91%',
                marginTop: '6%',
                overflowY: 'scroll',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                paddingBottom: '2%',
                border: '2px solid red'
            }}>
                {skillComponents}
            </div>
        </>
    )
}

export default Skills;