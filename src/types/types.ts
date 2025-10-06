export interface Author {
  name: string;
  email?: string;
  address?: string | null;
  image?: string | null;
  role?: string;
  createdAt?:string
}

export interface IBlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  published: boolean;
  date: string;
  authorId: number;
  author: Author;
}



export interface IWorkSlides {
  id:number
  slides:ISlide[]
}

export interface ISlide {
  images: Image[]
}

export interface Image {
  title: string
  path: string
  live: string
  clientLink: string
  serverLink: string
}



export type IAbout = IAboutInfo[]

export interface IAboutInfo {
  id: number
  title: string
  description: string
  stats: Stat[]
  skills: Skill[]
  createdAt: string
}

export interface Stat {
  label: string
  value: string
}

export interface Skill {
  icon: string
  title: string
  skills: Skill2[]
}

export interface Skill2 {
  icon: string
  skill: string
}



export interface Author {
  name: string;
  email?: string;
  role?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
  published: boolean;
  date: string;
  author: Author;
}

export interface IBlogParams{
  posts:BlogPost[]
}