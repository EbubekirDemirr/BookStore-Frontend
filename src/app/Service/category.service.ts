import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/ListResponseModel';
import { Observable } from 'rxjs';
import { Category } from '../Models/CategoryMode';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl="https://localhost:44319/api/Categories/category-GetAll"
  apiUrl1="https://localhost:44319"

  constructor(private httpClient:HttpClient) { }

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }

  getCategoryById(categoryId:number):Observable<ListResponseModel<Category>>{
    let newPath=this.apiUrl+"/Categories/get-CategoryById?id="+categoryId
    return this.httpClient.get<ListResponseModel<Category>>(newPath)
  }
}
