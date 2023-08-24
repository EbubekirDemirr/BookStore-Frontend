import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthorDetail } from 'src/app/Models/AuthorDetailModel';
import { BookAndAuthor } from 'src/app/Models/BookAndAuthorModel';
import { BookDetail } from 'src/app/Models/BookDetailModel';
import { AuthorDetailService } from 'src/app/Service/author-detail.service';
import { BookAndAuthorService } from 'src/app/Service/book-and-author.service';

@Component({
  selector: 'app-book-and-author',
  templateUrl: './book-and-author.component.html',
  styleUrls: ['./book-and-author.component.scss'],
})
export class BookAndAuthorComponent {
  bookAndAuthors: BookAndAuthor[]=[];
  baseUrl = 'https://localhost:44319/Uploads/Images/';

  constructor(
    private authorDetailService: AuthorDetailService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['bookAndAuthorId']) {
        this.getBookAndAuthorById(params['bookAndAuthorId']);
      }
    });
  }

  getBookAndAuthorById(bookAndAuthorId: number) {
    this.authorDetailService
      .getBookAndAuthorById(bookAndAuthorId)
      .subscribe((response) => {
        console.log( response.data);
        this.bookAndAuthors = response.data;
        console.log("test");
        console.log(this.bookAndAuthors);
      });
  }
}
