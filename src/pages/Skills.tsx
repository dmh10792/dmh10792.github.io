import Grid from "@mui/material/Grid";
import SkillBox from "../components/SkillBox/SkillBox";
import { skills } from "../helpers/skills";

const Skills = () => {

    const skillComponents = skills.map((skill, key) => {
        return <Grid item xs={3} ><SkillBox key={key} skill={skill}/></Grid>
    })

    return (
        <>
            <div style={{
                maxHeight: '98%',
                marginTop: '2%',
                overflowY: 'scroll',
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
                marginLeft: '3%',
            }}>
                <Grid container spacing={2}>
                    {skillComponents}
                </Grid>
            </div>
        </>
    )
}

export default Skills;