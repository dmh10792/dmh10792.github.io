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
        description: "This project modernized the Army's tracking of jump logs. Before its introduction, "
                    + "personnel would spend hours hand writing entries for dozens of jump logs at a time. Additionally, it would take anywhere from days to weeks "
                    + "for commanders to recieve semi-accurate readiness data for their organization. Upon the introduction of this application those man hours were reduced to just minutes "
                    + "and commanders were able to get instant and accurate metrics for readiness and planning.",
        imageURL: `${commonPath}/airborneready/1abrSplashPage.png`,
        images: getImageNames('airborneready')
    },
    {
        title: 'RetroLyft',
        description: "This application was used to streamline retros for the various application teams within the Army Software Factory. It initially focused on the tracking of " +
            "action items as well as trends and metrics for the individual teams. It was planned to expand to be an all inclusive retro facilitation application, but was sidelined to prioritize " +
            "work on Airborne Ready.",
        imageURL: `${commonPath}/retrolyft/1retrolyftDashboard.png.png`,
        images: getImageNames('retrolyft')
    },
]