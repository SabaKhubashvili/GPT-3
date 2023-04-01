export enum Pages{
    home='home',
    about='about',
    start='getStarted',
    blog='blog',
    openAi='openAi'
}

export interface AboutType{
    title:string
    description:string
}
export interface FeaturesType{
    title:string,
    description:string
}
export interface BlogType{
    image:string,
    date:string,
    title:string,
    isMain?:boolean
}