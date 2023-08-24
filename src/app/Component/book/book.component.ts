import { Component, Input } from '@angular/core';
import { Book } from 'src/app/Models/BookModel';
import { BookImageService } from 'src/app/Service/book-image.service';
import { BookService } from 'src/app/Service/book.service';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookDetail } from 'src/app/Models/BookDetailModel';
import { BookImage } from 'src/app/Models/BookImageModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  books: Book[] = [];
  currentBook: Book;
  bookDetails: BookDetail[];
  imageOfPath: string;
  baseUrl = 'https://localhost:44319/Uploads/Images/';

  constructor(
    private bookService: BookService,
    private bookImageService: BookImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['bookId']) {
        console.log(params['bookId']);
        this.bookService.searchBook(params['bookId']).subscribe((response) => {
          this.bookDetails = response.data;
        });
      } else {
        this.getBooks();
      }
    });
  }

  getBooks() {
    this.bookService.getBooks().subscribe((response) => {
      this.bookDetails = response.data;
      console.log('this.bookDetails');
      console.log(response.data);
    });
  }
  setCurrentBook(book: Book) {
    this.currentBook = book;
  }

  getCurrentBookClass(book: Book) {
    if (book == this.currentBook) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
