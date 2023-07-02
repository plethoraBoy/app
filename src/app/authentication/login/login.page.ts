import { Component, Input, OnInit, Output } from '@angular/core';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input() solid = '';
  @Input() label = '';
  fb: FormBuilder | undefined;
  loginForm: FormGroup | undefined;
  constructor(public router: Router, private navController: NavController) {}

  ngOnInit() {
   
  }

  login() {}
  register() {
    this.navController.navigateForward(['/register']);
  }
}
