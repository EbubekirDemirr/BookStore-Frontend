import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookImage } from 'src/app/Models/BookImageModel';
import { BookImageService } from 'src/app/Service/book-image.service';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.scss']
})
export class BookImageComponent {
bookImages: BookImage[]=[];
baseUrl: 'https://localhost:44319/Uploads/Images/';


  constructor(
    private bookImageService: BookImageService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      if (params['bookId']) {
        this.getBookImageByBookId(params['bookId']);
      }
    });
  }

  getBookImageByBookId(bookId: number) {
    this.bookImageService.getBookImageByBookId(bookId).subscribe((response) => {
      this.bookImages = response.data;
    });
  }

  getActiveImageClass(bookImage: BookImage) {
    if (bookImage === this.bookImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }
}
