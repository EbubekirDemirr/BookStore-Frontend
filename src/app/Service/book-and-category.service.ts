import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookAndCategory } from '../Models/BookAndCategoryModel';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookAndCategoryService {

  apiUrl="https://localhost:44319/api"

  constructor(private httpClient:HttpClient) { }

  getBookAndCategoryById(bookAndCategoryId:number):Observable<ListResponseModel<BookAndCategory>>{
    let newPath=this.apiUrl+"/BookAndCategory/getBookAndCategoryById?id="+bookAndCategoryId
    return this.httpClient.get<ListResponseModel<BookAndCategory>>(newPath)
  }
}
