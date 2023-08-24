import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Book } from '../Models/BookModel';
import { Observable } from 'rxjs';
import { BookImage } from '../Models/BookImageModel';
import { BookDetail } from '../Models/BookDetailModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl="https://localhost:44319/api/Books/book-GetAll"
  apiUrl1="https://localhost:44319/api"
  

  constructor(private httpClient:HttpClient) { }

  getBooks(): Observable<ListResponseModel<BookDetail>> {
    return this.httpClient.get<ListResponseModel<BookDetail>>(this.apiUrl);
  }

  getBookWithBookImageByBookId(bookId: number): Observable<SingleResponseModel<BookDetail>> {
    console.log(bookId);
    let newPath = this.apiUrl1 + '/Books/GetBookWithBookImageByBookId?id=' + bookId;
    console.log(bookId);
    return this.httpClient.get<SingleResponseModel<BookDetail>>(newPath);
  }

  searchBook(bookName:string): Observable<any>{
    return this.httpClient.get(`https://localhost:44319/api/Books/searched-books?bookName=${bookName}`)

  }
  
}
