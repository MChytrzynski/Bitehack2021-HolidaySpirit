import { Tag } from './tag';
import { Solution } from './solution';
export interface Problem {
    id:number;
    username: string;
    title: string;
    content: string;
    tags: Tag[];
    solution: Solution;
    isPrivate: boolean;
    date: string;
}