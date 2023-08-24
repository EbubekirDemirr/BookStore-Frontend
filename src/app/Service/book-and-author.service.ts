import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { BookAndAuthor } from '../Models/BookAndAuthorModel';
import { Author } from '../Models/AuthorModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { AuthorDetail } from '../Models/AuthorDetailModel';
import { BookDetail } from '../Models/BookDetailModel';

@Injectable({
  providedIn: 'root'
})
export class BookAndAuthorService {
  apiUrl="https://localhost:44319/api"

  constructor(private httpClient:HttpClient) { }

  getBookAndAuthorById(bookAndAuthorId:number):Observable<ListResponseModel<AuthorDetail>>{
    let newPath=this.apiUrl+"/Books/getBookByAuthorId?id="+bookAndAuthorId
    return this.httpClient.get<ListResponseModel<AuthorDetail>>(newPath)
  }
}
