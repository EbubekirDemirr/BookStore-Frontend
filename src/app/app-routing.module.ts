import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Component/book/book.component';
import { CategoryComponent } from './Component/category/category.component';
import { AuthorComponent } from './Component/author/author.component';
import { BookAndAuthorComponent } from './Component/book-and-author/book-and-author.component';
import { BookAndCategoryComponent } from './Component/book-and-category/book-and-category.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { BookDetailComponent } from './Component/book-detail/book-detail.component';
import { NaviComponent } from './Component/navi/navi.component';
import { LoginComponent } from './Component/login/login.component';
import { LoginGuard } from './Guards/login.guard';
import { RegisterComponent } from './Component/register/register.component';


const routes: Routes = [
  { path: "", pathMatch: "full", component: HomePageComponent, canActivate:[LoginGuard] },
  { path: "home", component: HomePageComponent },
  { path: "books", component: BookComponent, canActivate:[LoginGuard] },
  { path: "books/:bookId", component: BookComponent, canActivate:[LoginGuard] },
  { path: "books/bookDetail/:bookId", component: BookDetailComponent, canActivate:[LoginGuard] },
  {path:"authors", component:AuthorComponent,  canActivate:[LoginGuard]},
  {path: "authors/bookAndAuthor/:bookAndAuthorId", component: BookAndAuthorComponent, canActivate:[LoginGuard] },
  {path: "categories", component:CategoryComponent, canActivate:[LoginGuard]},
  {path: "categories/bookAndCategory/:bookAndCategoryId", component:BookAndCategoryComponent, canActivate:[LoginGuard]},
  {path: "login", component:LoginComponent},
  {path:"register", component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
