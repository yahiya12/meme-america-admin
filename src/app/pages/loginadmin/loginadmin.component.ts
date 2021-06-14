import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/api/api.service';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent implements OnInit {

  login: FormGroup
  constructor(private router: Router,
    private api: ApiService) {
    this.login = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  goTohome() {
    let body: any = {};
    body.username = this.login.value.username,
    body.password = this.login.value.password
    this.api.loginAdmin(body).subscribe((data: any) => {
      body.role = 'Admin';
      localStorage.setItem("profile", JSON.stringify(body));
      this.api.openSnackBarAction("Login Sucessfully", 'Ok');
      console.log('Login Sucessfully')
      this.router.navigate(['/home']);
      // this.productList = data;
    });
    // this.router.navigate(['/otpverify']);
  }

}
