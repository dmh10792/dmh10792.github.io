
import SkillBox from "../components/SkillBox/SkillBox";
import { skills } from "../helpers/skills";
import {Typography} from "@mui/material";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

    const skillComponents = skills.map((skill, key) => {
        return <SkillBox key={key} skill={skill}/>
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
            <div>
                

                <div className="text-center">
                    <Typography
                        variant={'h6'}
                        fontFamily={'sans-serif'}
                        color={'white'}
                        className="p-8"
                    >
                        As a dedicated industry professional, I am committed to lifelong learning and the continuous development of new expertise. Below is a selection of my key skills and competencies.
                    </Typography>
                </div>

                <div className="flex">
                    <Carousel 
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        transitionDuration={1000}
                        centerMode={true}
                        className="min-h-60 min-w-lg"
                    >
                        {skillComponents}
                    </Carousel>
                </div>

            </div>
    )
}

export default Skills;