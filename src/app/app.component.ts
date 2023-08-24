import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from './Service/book.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LibraryFrontend';

  
}


