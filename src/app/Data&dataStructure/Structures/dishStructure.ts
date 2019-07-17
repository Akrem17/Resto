import {COMMENT} from './commentStructure';
export class DISH{
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description:string;
    comments:COMMENT[];
}