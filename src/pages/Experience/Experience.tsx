//Utilities
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experiences } from '../../helpers/experience';

//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//CSS
import 'react-vertical-timeline-component/style.min.css';
import {Stack, Typography} from "@mui/material";


const Experience = () => {

    const history :React.ReactElement[]= experiences.map((experience, key) => {

        const dateRange :string = `${experience.startDate} - ${experience.endDate}`

        return (
            <VerticalTimelineElement
                id='Experience'
                key={key}
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={dateRange}
                className='text-left'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={experience.icon} className="experience-icon"/>}
                
            >
                <Stack spacing={1}>
                    <img className='rounded-sm' alt='experience image' src={experience.picture} />

                    <Typography variant={'h5'}>
                        {experience.title}
                    </Typography>

                    <h5 className="experience-company">{experience.company}</h5>
                    <p className='experience-description'>
                        {experience.description}
                    </p>
                </Stack>
            </VerticalTimelineElement>
        )
    })

    return (
        <div id='Experience' className=" text-center">
            <div className='experience-container text-center'>
                <Typography
                    variant={'h2'}
                    fontFamily={'sans-serif'}
                    fontWeight={'500'}
                    color={'white'}
                >
                    Experiences
                </Typography>
                <div className='timeline-container'>
                    <VerticalTimeline>
                        {history}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Experience;