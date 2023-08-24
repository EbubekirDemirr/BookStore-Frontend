import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { NaviComponent } from './Component/navi/navi.component';
import { BookComponent } from './Component/book/book.component';
import { CategoryComponent } from './Component/category/category.component';
import { AuthorComponent } from './Component/author/author.component';
import { PublisherComponent } from './Component/publisher/publisher.component';
import { HomePageComponent } from './Component/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BookAndAuthorComponent } from './Component/book-and-author/book-and-author.component';
import { BookAndCategoryComponent } from './Component/book-and-category/book-and-category.component';
import { FilterpipePipe } from './Pipe/filterpipe.pipe';

import { ToastrModule } from 'ngx-toastr';
import { BookImageComponent } from './Component/book-image/book-image.component';
import { BookDetailComponent } from './Component/book-detail/book-detail.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SearchComponent } from './Component/search/search.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BookComponent,
    CategoryComponent,
    AuthorComponent,
    PublisherComponent,
    BookAndAuthorComponent,
    BookAndCategoryComponent,
    FilterpipePipe,
    HomePageComponent,
    BookImageComponent,
    BookDetailComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["http://localhost:4200/"]
      },
    }),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
