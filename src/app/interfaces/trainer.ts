import { Course } from './course';

export interface Trainer {
    id: number;
    avatar: string;
    name: string;
    videos: number;
    followers: string;
    coursesTotal?: number;
    bio?: string;
    rating?: number;
    courses?: Course[];
    image?: string;
    verified?: boolean;
}