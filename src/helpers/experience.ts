import { JobExperience } from "../types";
import { faMountain, faCode, faPaperPlane, faEarthEurope, faParachuteBox } from '@fortawesome/free-solid-svg-icons';

const commonPath :string = '/src/assets/images/experiences';

export const experiences : JobExperience[] = [
    {
        title: 'Software Development Engineer',
        company: 'Army Software Factory, Army Futures Command',
        startDate: 'July 2024',
        endDate: 'Present',
        description: `In this position I design, develop, and deploy applications with a focus on high
                    availability, low latency, and scalability. I work as a part of a balanced team to implement user
                    stories and develop them into application features. We utilize industry practices such as testdriven
                    development, eXtreme programming, and agile development principles.`,
        accomplishments: [
            "Completed the Software Factory's accredited technical accelerator with an A average.",
            `Assisted professors in aiding classmates' understanding of software development
                concepts using my previous knowledge and experience.`,
            `Developed multiple full-stack applications utilizing multiple industry-standard
                languages and frameworks.`
        ],
        picture: `${commonPath}/aswf/software-factory.webp`,
        icon: faCode
    },
    {
        title: 'Unmanned Aircraft Systems (UAS) Operations Technician',
        company: '10th Mountain Division, U.S. Army',
        startDate: 'June 2022',
        endDate: 'July 2024',
        description: `I served as the aviation expert on all aspects of operations and ensured maximum
            readiness to conduct flight operations in support of my parent organization and the organizations
            we supported. I advised commanders at all levels on matters relating to unmanned aircraft,
            following the associated technical manuals, regulations, and federal laws. I provided direct
            supervision, instruction, and guidance on fleet infrastructure for flight operations,
            standardization, maintenance, and safety.`,
        accomplishments: [
            `Implemented efficient maintenance processes, enabling the maintenance section to
                complete over 3,000 maintenance actions totaling over 1,500 maintenance hours in
                just over a year.`,
            `Hosted the first ever UAS Academy, providing instruction and training to
                organization leader's and staff on UAS limitations, procedures, and proper
                use/employment.`,
            `Developed the curriculum for the UAS Academy.`,
            `Supervised and refined the lesson plans of the various instructors conducting the
                training during the Academy.`,
            `Built relationships within external organizations ensuring the completion of parts
                replacements despite Army-wide shortages.`,
            `Let the team to continually exceed their flying hour projections, mishap-free, and
                surpass their training goals by 50%.`,
            `Completed the Aviation Safety Officer Course, becoming OSHA 511 certified.`
        ],
        picture: `${commonPath}/10thMTN/10thMTNFlag.png`,
        icon: faMountain
    },
    {
        title: 'Instructor',
        company: 'US Army Training and Doctrine Command',
        startDate: 'June 2018',
        endDate: 'June 2022',
        description: `I imparted technical and tactical knowledge on the fundamentals of flight and proper
            operation of an unmanned aircraft to students aged 18 to 35. I implemented instructional course
            materials and adapted those materials to each student's needs. Additionally, I ensured students
            understood the significance of becoming subject matter experts through education and future
            learning.`,
        accomplishments: [
            `Designated as a senior Army instructor due to my extensive experience and superior
                performance.`,
            `Ensured students learned weekly classroom instructions on flight, weather, and
                information security.`,
            `Completed 80 combined hours of instruction for CompTIA Security+ and Network+
                training.`,
            `Graduated from the TRADOC Cadre Training Course and the Army's Advanced
                Leadership Course.`,
            `Graduated the Army's Advanced Leadership Course in the top 20% of his class with
                an average of 98%.`,
            `Graduated from the Army's Common Faculty Development Instructor Course with an
                average of 97%.`,
            `Conducted risk assessment and mitigation 5+ times each week for flights while
                serving as aircraft commander.`
        ],
        picture: `${commonPath}/2-13th/monuments.jpg`,
        icon: faPaperPlane
    },
    {
        title: 'Standardization Instructor Operator',
        company: '173rd Airborne Brigade Combat Team, U.S. Army',
        startDate: 'June 2018',
        endDate: 'June 2022',
        description: `Analyzed and improved the organization's Standard Operating Procedures (SOP) to the
            Army's Department of Education and Standardization (DES) standards. Ensured all applicable
            Technical Manuals, Army Regulations, Department of Defense Publications, and Federal
            Aviation Administration Regulations were always up to date and in compliance with DES
            standards. Counseled peers and subordinates on job performance and training requirements.
            Participated in mission planning for flights conducted by the unit.
            • Facilitated training for multinational exercises in countries`,
        accomplishments: [
            `Facilitated training for multinational exercises in countries including Germany, Spain,
                Latvia, and Ukraine with 0 aircraft mishaps or accidents while fortifying US relations
                with 7+ European countries.`,
            `Trained Aircraft Commanders in aircraft safety, system limitations, emergency
                procedures, weather limitations, and basic instruction with one progressing to
                becoming an instructor.`,
            `Conducted bi-monthly evaluations on at least 10% of the total assigned aircraft
                operators and maintainers.`,
            `Implemented an improved evaluation program that satisfied the Aviation Resource
                Management Survey (ARMS) inspection criteria and developed the unit's
                Standardization program to improve its inspection score to 89%.`,
            `Improved the organization's overall inspection score to 85%.`,
            `Maintained flight and training records for 25 aircraft operators and maintenance
                personnel.`,
            `Served as the unit hearing conservation program manager conducting annual hearing
                conservation training, maintaining audiology exam results for 25 personnel, and
                coordinating an annual hearing readiness survey.`,
            `Served as Mission Briefing Officer on various multinational flights across Europe.`,
            `As the unit's Primary Hazardous Materials Certifier, certified the transport and
                movement of vehicles, aircraft, fuel, and other associated materials to various
                destinations throughout Europe. Ensuring each transport complied with the
                destination country's hazardous materials regulations.`
        ],
        picture: `${commonPath}/173rd/173rd.jpg`,
        icon: faEarthEurope
    },
    {
        title: 'Unmanned Aircraft Operator',
        company: '3rd Brigade 82nd Airborne Division',
        startDate: 'July 2010',
        endDate: 'June 2015',
        description: `I demonstrated excellent problem-solving ability by troubleshooting all systems
            associated with the unmanned aircraft system. Conducted site survey, selection, and equipment
            emplacement and displacement every month.`,
        accomplishments: [
            `Served as an Aircraft Commander for over 100 documented flight hours; Mission
                Coordinator for over 15 in-country training missions; and unit Communications
                Security Representative.`,
            `Passed the Federal Aviation Administration (FAA) Laser Grade test for private pilots.`,
            `Graduated from the Army Basic Leadership Course.`
        ],
        picture: `${commonPath}/82nd/82ndFlag.png`,
        icon: faParachuteBox
    },
]