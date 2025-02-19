//Utilities
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experiences } from '../../helpers/experience';
import { JobExperience } from '../../types';

//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//CSS
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';


const Experience = () => {

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
            >
                <img className='experience-image'  src={experience.picture}/>
                <h3 className="experience-title">{experience.title}</h3>
                <h5 className="experience-company">{experience.company}</h5>
                <p className='experience-description'>
                    {experience.description}
                </p>
                {/* <ul className='experience-accomplishmentList'>
                    {experience.accomplishments.map((item) => {
                        return <li className='experience-accomplishment'>{item}</li>
                    })}
                </ul> */}
            </VerticalTimelineElement>
        )
    })

    const handleClick = (experience: JobExperience) => {
        console.log(experience.title);
        //This is where I will put the logic for opening the modal
    }

    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            <div className='timeline-container'>
                <VerticalTimeline>
                    {history}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience;