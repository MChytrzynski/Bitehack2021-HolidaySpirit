import { Tag } from './tag';
import { Solution } from './solution';
export interface Problem {
    id:number;
    username: string;
    title: string;
    content: string;
    tags: Tag[];
    solutions: Solution;
    isPrivate: boolean;
    Date: string;
}