import { UserComment } from "./Comments";
import { User } from "./User";

export interface Post {
    id: number;
    userId: number;
    content: string;
    timestamp: Date;
    picture: string;
}