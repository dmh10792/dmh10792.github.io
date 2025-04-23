
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
                maxHeight: '97%',
                marginTop: '2%',
                overflow: 'auto',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                marginLeft: '3%',
            }}>
                <div
                    style={{
                        flex: 1,
                        overflowY: 'auto',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}
                >
                    {skillComponents}
                </div>

                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                    }}
                >
                    <Typography
                        variant={'body1'}
                        fontFamily={'sans-serif'}
                        fontSize={'xx-large'}
                    >
                        A short paragraph of text that explains how I am committed to continued learning.
                        azlsljksdjlkcnskjdcns. skdjcnskjdncskjdncsd. sdkjcnskjdncksjdcksjdnc
                    </Typography>
                </div>

            </div>
    )
}

export default Skills;