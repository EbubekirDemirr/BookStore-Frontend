import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      userName: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        (response) => {
          this.toastrService.info("Kullanıcı oluşturuldu");
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['users']);
          this.toastrService.success('Kullanıcı Oluşturuldu');
        },
        (responseError) => {
          this.toastrService.info("Kullanıcı Oluşturuldu");
        }
      );
    } else {
      this.toastrService.error('Form geçersiz.');
    }
  }
}
