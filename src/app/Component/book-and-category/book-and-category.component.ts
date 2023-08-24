import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookAndCategory } from 'src/app/Models/BookAndCategoryModel';
import { BookAndCategoryService } from 'src/app/Service/book-and-category.service';

@Component({
  selector: 'app-book-and-category',
  templateUrl: './book-and-category.component.html',
  styleUrls: ['./book-and-category.component.scss']
})
export class BookAndCategoryComponent {
  bookAndCategories: BookAndCategory[]=[];
  baseUrl = 'https://localhost:44319/Uploads/Images/';

  constructor(
    private bookAndCategoryService: BookAndCategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['bookAndCategoryId']) {
        this.getBookAndCategoryById(params['bookAndCategoryId']);
      }
    });
  }

  getBookAndCategoryById(bookAndCategoryId: number) {
    this.bookAndCategoryService
      .getBookAndCategoryById(bookAndCategoryId)
      .subscribe((response) => {
        console.log(response.data);
        this.bookAndCategories = response.data;
        console.log("tessss");

      });
  }
}
