import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/ListResponseModel';
import { BookImage } from '../Models/BookImageModel';

@Injectable({
  providedIn: 'root'
})
export class BookImageService {

  constructor(private httpClient: HttpClient) { }

  apiUrl="https://localhost:44319/api"

  getBookImageByBookId(bookId: number): Observable<ListResponseModel<BookImage>> {
    let newPath = this.apiUrl + '/BookImage/get-ImageByBookId?bookId=' + bookId;
    return this.httpClient.get<ListResponseModel<BookImage>>(newPath);
  }
}
