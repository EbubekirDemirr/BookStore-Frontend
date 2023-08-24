import { BookImage } from "./BookImageModel";

export interface Book{
    id:number;
    bookName:string;
    description:string;
    pageCount: number;
    bookImages:BookImage[];
}