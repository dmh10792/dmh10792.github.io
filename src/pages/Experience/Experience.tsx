//Utilities
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { experiences } from '../../helpers/experience';

//Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

//CSS
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

const Experience = () => {

    const history :React.ReactElement[]= experiences.map((experience) => {

        const dateRange :string = `${experience.startDate} - ${experience.endDate}`
        return (
            <VerticalTimelineElement
                className="experience-element"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={dateRange}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={experience.icon} className="experience-icon"/>}
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

    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            <div className='timeline-container'>
                <VerticalTimeline>
                    {history}
                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faHouse} className="navBar-icon"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faHouse} className="navBar-icon"/>}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FontAwesomeIcon icon={faHouse} className="navBar-icon"/>}
                    /> */}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience;