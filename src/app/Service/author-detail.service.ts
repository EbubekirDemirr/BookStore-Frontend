import { Injectable } from '@angular/core';
import { BookAndAuthor } from '../Models/BookAndAuthorModel';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthorDetail } from '../Models/AuthorDetailModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailService {

  apiUrl="https://localhost:44319/api"

  constructor(private httpClient:HttpClient) { }

  getBookAndAuthorById(bookAndAuthorId:number):Observable<ListResponseModel<BookAndAuthor>>{
    let newPath=this.apiUrl+"/BookAndAuthor/getBookAndAuthorById?id="+bookAndAuthorId
    console.log(newPath);
    return this.httpClient.get<ListResponseModel<BookAndAuthor>>(newPath)
    
  }
}
