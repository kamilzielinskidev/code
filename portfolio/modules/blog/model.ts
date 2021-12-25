export type BlogPost = {
  id: string;
  date: Date;
  title: string;
  author: string;
  content: string;
  likesAmount: number;
  tags: string[];
  commentsAmount: number;
};
