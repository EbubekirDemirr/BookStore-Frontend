import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Author } from '../Models/AuthorModel';
import { BookAndAuthor } from '../Models/BookAndAuthorModel';
import { Book } from '../Models/BookModel';
import { AuthorDetail } from '../Models/AuthorDetailModel';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  apiUrl="https://localhost:44319/api/Authors/author-GetAll"
  apiUrl1="https://localhost:44319/api"

  constructor(private httpClient:HttpClient) { }

  getAuthors(): Observable<ListResponseModel<AuthorDetail>> {
    return this.httpClient.get<ListResponseModel<AuthorDetail>>(this.apiUrl);
  }
  


   
}
