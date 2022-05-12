export interface Community {
  id: number;
  user: User;
  date: string;
  images: string[];
  likes: number;
  comments: Comments;
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

interface User {
  avatar: string;
  name: string;
}