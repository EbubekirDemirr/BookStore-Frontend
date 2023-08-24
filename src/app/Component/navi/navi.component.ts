import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Book } from 'src/app/Models/BookModel';
import { UserModel } from 'src/app/Models/UserModel';
import { AuthService } from 'src/app/Service/auth.service';
import { BookService } from 'src/app/Service/book.service';
import { LocalstorageService } from 'src/app/Service/localstorage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss'],
})
export class NaviComponent implements OnInit {
  userInfo: UserModel = this.authService.getUserInfo();

  constructor(
    private authService: AuthService,
    private localStorageService: LocalstorageService,
    private router: Router,
    private toastrservice: ToastrService
  ) {}

  ngOnInit(): void {
    this.ngDoCheck();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.localStorageService.removeToken();
    this.toastrservice.success('başarı ile çıkış yaptınız');
    this.router.navigate(['']);
  }

  ngDoCheck() {
    if (this.userInfo !== this.authService.user) {
      this.userInfo = this.authService.user;
    }
  }
}
