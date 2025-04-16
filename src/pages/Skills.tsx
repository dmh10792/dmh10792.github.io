
import SkillBox from "../components/SkillBox/SkillBox";
import { skills } from "../helpers/skills";
import {Typography} from "@mui/material";

const Skills = () => {

    const skillComponents = skills.map((skill, key) => {
        return <SkillBox key={key} skill={skill}/>
    })

    return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                maxHeight: '97%',
                marginTop: '2%',
                overflowY: 'auto',
                overflowX: 'hidden',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                marginLeft: '3%',
            }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 0.25,
                        flex: 1,
                    }}
                >
                    {skillComponents}
                </div>

                <div
                    style={{
                        flex: 1,
                    }}
                >
                    <Typography>
                        A short paragraph of text that explains how I am committed to continued learning.
                        azlsljksdjlkcnskjdcns. skdjcnskjdncskjdncsd. sdkjcnskjdncksjdcksjdnc
                    </Typography>
                </div>

            </div>
    )
}

export default Skills;