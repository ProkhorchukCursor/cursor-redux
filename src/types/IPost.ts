export interface IAuthor {
 name: string;
 photo: string;
 nickname: string;
}

export interface IPost {
 author: IAuthor;
 content: string;
 image: string;
 date: string;
 comments: number;
 reposts: number;
 likes: number;
 id: string;
}

export interface INewPost {
 text: string;
 image: string;
 author: string;
}
