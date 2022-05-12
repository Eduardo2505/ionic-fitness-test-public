export interface Course {
  id: number;
  new?: boolean;
  title: string;
  image: string;
  description?: string;
  type: string;
  likes?: number;
  completed?: string;
  duration?: string;
  bodyArea?: string;
  author?: {
    name: string;
    avatar: string;
  };
  schedule?: Schedule[];
  reviews?: Review[];
}

interface Schedule {
  title: string;
  image: string;
  bodyArea: string;
  duration: string;
  day: number;
  description?: string;
  trainingType?: string;
  difficulty?: string;
}

interface Review {
  avatar: string;
  name: string;
  date: string;
  rate: number;
  comment: string;
}