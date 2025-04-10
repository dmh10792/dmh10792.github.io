import {ProjectType} from "../types.ts";

const commonPath :string = '/src/assets/images/projects';



const getImageNames = (projectName: string) :string[]=> {
   
    const files = import.meta.glob(`/src/assets/images/projects/*/*.{png,jpg,jpeg,svg}`, {eager: true});
    let imagePaths = Object.keys(files);
    imagePaths = imagePaths.filter(string => string.includes(projectName));
      
    return imagePaths
}

export const projects: ProjectType[] = [
    {
        title: 'Airborne Ready',
        description: "This project completely modernized the Army's tracking of jump logs for its paratroopers. Before its introduction, " 
                    + "personnel would spend countless hours hand writing entries for dozens of jump logs at a time. Additionally, it would take anywhere from days to weeks "
                    + "for commanders to recieve semi-accurate readiness data for their organization. Upon the introduction of this application those man hours were reduced to just minutes "
                    + "and commanders were able to get instant and accurate metrics for readiness and planning. Many other quality of life features were implemented into the application and "
                    + "it was unanimously voted to become the official program of record for the Army's airborne community.",
        imageURL: `${commonPath}/airborneready/1abrSplashPage.png`,
        images: getImageNames('airborneready')
    },
    {
        title: 'RetroLyft',
        description: "This application was an attempt to streamline retros for the various application teams within the Army Software Factory. It initially focused on the tracking of " +
            "action items as well as trends and metrics for the individual teams. It was planned to expand to be an all inclusive retro facilitation application, but was sidelined to prioritize " +
            "work on Airborne Ready.",
        imageURL: `${commonPath}/retrolyft/1retrolyftDashboard.png.png`,
        images: getImageNames('retrolyft')
    },
]