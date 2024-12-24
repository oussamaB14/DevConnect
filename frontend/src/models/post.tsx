export interface IPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: string;
  comments: string[];
  likes: string[];
  shares: string[];
  media: string[];
  type: PostType;
  linkUrl: string;
}
export enum PostType {
  //ARTICLE = "ARTICLE",
  PROJECT = "PROJECT",
  POST = "POST",
}
