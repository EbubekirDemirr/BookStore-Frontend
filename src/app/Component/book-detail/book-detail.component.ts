import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Data } from 'popper.js';
import { BookDetail } from 'src/app/Models/BookDetailModel';
import { BookImage } from 'src/app/Models/BookImageModel';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  bookDetail: BookDetail;
  
  currentBookDetail: BookDetail;
  baseUrl = 'https://localhost:44319/Uploads/Images/';

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['bookId']) {
        this.getBookWithBookImageByBookId(params['bookId']);
      }
    });
  }

  getBookWithBookImageByBookId(bookId: number) {
    this.bookService
      .getBookWithBookImageByBookId(bookId)
      .subscribe((response) => {
        console.log(response.data);
        this.bookDetail = response.data;
      });
  }
}
