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
