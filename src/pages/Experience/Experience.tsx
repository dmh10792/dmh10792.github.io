//Utilities
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experiences } from '../../helpers/experience';
import { JobExperience } from '../../types';

//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//CSS
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import ExperienceModal from '../../components/ExperienceModal';
import { useState } from 'react';
import {borderRadiusInner, borderRadiusOuter} from "../../AppHelper.ts";


const Experience = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState<JobExperience>(experiences[0]);

    const history :React.ReactElement[]= experiences.map((experience, key) => {

        const dateRange :string = `${experience.startDate} - ${experience.endDate}`

        return (
            <VerticalTimelineElement
                key={key}
                className="experience-element" 
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={dateRange}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={experience.icon} className="experience-icon"/>}
                onTimelineElementClick={()=>handleClick(experience)}
                style={{
                    borderRadius: `${borderRadiusOuter}`,
                }}
            >
                <img className='experience-image' alt='experience image' src={experience.picture} style={{ borderRadius: `${borderRadiusInner}`}}/>
                <h3 className="experience-title">{experience.title}</h3>
                <h5 className="experience-company">{experience.company}</h5>
                <p className='experience-description'>
                    {experience.description}
                </p>
            </VerticalTimelineElement>
        )
    })

    const handleClick = (experience: JobExperience) => {
        setSelectedExperience(experience)
        setIsModalOpen(true);
    }

    return (
        <>
            <div className='experience-container'>
                <div className='timeline-container'>
                    <VerticalTimeline>
                        {history}
                    </VerticalTimeline>
                </div>
            </div>

            <ExperienceModal open={isModalOpen} experience={selectedExperience} setOpen={setIsModalOpen}/>
        </>
    )
}

export default Experience;