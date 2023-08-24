import { createAction, createReducer, on, props } from "@ngrx/store";
import { BookDetail } from "./BookDetailModel";

export interface BookState{
    selectedBook:BookDetail | null;
    
}

export const setSelectedBook = createAction(
    '[Book] Set Selected Book',
    props<{ selectedBook: BookDetail | null }>()
  );


  export const initialState: BookState = {
    selectedBook: null,
  };
  
  export const bookReducer = createReducer(
    initialState,
    on(setSelectedBook, (state, { selectedBook }) => ({
      ...state,
      selectedBook,
    }))
  );