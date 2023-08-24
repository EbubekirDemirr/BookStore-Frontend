import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAndAuthorComponent } from './book-and-author.component';

describe('BookAndAuthorComponent', () => {
  let component: BookAndAuthorComponent;
  let fixture: ComponentFixture<BookAndAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAndAuthorComponent]
    });
    fixture = TestBed.createComponent(BookAndAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
