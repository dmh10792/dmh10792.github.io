import { IconProp } from "@fortawesome/fontawesome-svg-core"

export type JobExperience = {
    title: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string,
    accomplishments: string[],
    picture?: string,
    icon: IconProp,
}

export type SkillType = {
    name: string,
    imageURL: string,
}

export type ProjectType = {
    title: string,
    description: string,
    imageURL: string,
}