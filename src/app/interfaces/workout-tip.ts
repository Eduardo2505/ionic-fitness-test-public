export interface WorkoutTip {
  id: number;
  image: string;
  title: string;
  author: Author;
  date: string;
  likes: number;
  comments: Comments;
  content?: string;
}

interface Comments {
  total: number;
  data: Comment[];
}

interface Comment {
  user: string;
  avatar: string;
  message: string;
  likes: number;
  time: string;
  replies?: Reply[];
}

interface Reply {
  id: number;
  user: string;
  avatar: string;
  message: string;
  likes: number;
  time: string;
}

interface Author {
  avatar: string;
  name: string;
}