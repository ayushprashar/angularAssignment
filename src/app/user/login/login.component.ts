import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() emailId: string;
  @Input() passwordId: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  submitUser() {
    console.log(this.emailId + 'is username' + this.passwordId + 'is password');
    this.router.navigate(['home']);
  }

}
