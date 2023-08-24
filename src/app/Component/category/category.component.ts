import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Models/BookModel';
import { Category } from 'src/app/Models/CategoryMode';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categories: Category[] = [];
  currentCategory: Category;
  book: Book[];

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getCategoryById(params['categoryId']);
      }
      else{
        this.getCategories();
      }
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  getCategoryById(categoryId: number) {
    this.categoryService.getCategoryById(categoryId).subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
