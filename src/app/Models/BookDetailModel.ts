import { BookImage } from "./BookImageModel";

export interface BookDetail{
    id:number;   
    bookName:string;
    description:string;
    pageCount: number;
    bookId:number;
    bookImages:BookImage[];
    showFullDescription?: boolean;
}