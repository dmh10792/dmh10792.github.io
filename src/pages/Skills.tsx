
import SkillBox from "../components/SkillBox/SkillBox";
import { skills } from "../helpers/skills";

const Skills = () => {

    const skillComponents = skills.map((skill, key) => {
        return <SkillBox key={key} skill={skill}/>
    })

    return (
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 0.5,
                maxHeight: '97%',
                marginTop: '2%',
                overflowY: 'auto',
                overflowX: 'hidden',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                marginLeft: '3%',
            }}>
                    {skillComponents}

            </div>
    )
}

export default Skills;