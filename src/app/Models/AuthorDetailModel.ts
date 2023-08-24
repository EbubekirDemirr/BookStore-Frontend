import { AuthorImage } from "./AuthorImageModel";

export interface AuthorDetail{
    id:number;   
    authorFirstName:string;
    authorLastName:string;
    biography: number;
    authorId:number;
    authorImages:AuthorImage[];
}