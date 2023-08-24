import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAndCategoryComponent } from './book-and-category.component';

describe('BookAndCategoryComponent', () => {
  let component: BookAndCategoryComponent;
  let fixture: ComponentFixture<BookAndCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAndCategoryComponent]
    });
    fixture = TestBed.createComponent(BookAndCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
