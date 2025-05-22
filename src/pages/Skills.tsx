
import SkillBox from "../components/SkillBox/SkillBox";
import { skills } from "../helpers/skills";
import {Typography} from "@mui/material";

const Skills = () => {

    const skillComponents = skills.map((skill, key) => {
        return <SkillBox key={key} skill={skill}/>
    })

    return (
            <div 
                className="p-8"
                // style={{
                //     display: 'flex',
                //     maxHeight: '97%',
                //     marginTop: '2%',
                //     overflow: 'auto',
                //     msOverflowStyle: 'none',
                //     scrollbarWidth: 'none',
                //     marginLeft: '3%',
                // }}
            >
                

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
                        color={'white'}
                        className="text-center"
                    >
                        As a dedicated industry professional, I am committed to lifelong learning and the continuous development of new expertise. Below is a selection of my key skills and competencies.
                    </Typography>
                </div>

                <div
                    className="flex "
                    // style={{
                    //     flex: 1,
                    //     overflowY: 'auto',
                    //     msOverflowStyle: 'none',
                    //     scrollbarWidth: 'none',
                    // }}
                >
                    {/* {skillComponents} */}
                </div>

            </div>
    )
}

export default Skills;