import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetail } from 'src/app/Models/AuthorDetailModel';
import { Author } from 'src/app/Models/AuthorModel';
import { BookAndAuthor } from 'src/app/Models/BookAndAuthorModel';
import { Book } from 'src/app/Models/BookModel';
import { AuthorService } from 'src/app/Service/author.service';
import { BookAndAuthorService } from 'src/app/Service/book-and-author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent {
  authors: Author[] = [];
  currentAuthor: Author;
  authorDetails: AuthorDetail[];
  imageOfPath: string;
  baseUrl= 'https://localhost:44319/Uploads/Images/';


  constructor(
    private authorService: AuthorService,
    private activatedRoute: ActivatedRoute,
    private bookAndAuthorService: BookAndAuthorService
  ) {}

  ngOnInit(): void {
    this.getAuthors();
  }
  getAuthors() {
    this.authorService.getAuthors().subscribe((response) => {
      console.log(response.data);
      this.authorDetails = response.data;
    });
  }

  setCurrentAuthor(author: Author) {
    this.currentAuthor = author;
  }

  getCurrentAuthorClass(author: Author) {
    if (author == this.currentAuthor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
