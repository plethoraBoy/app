import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( public router : Router,private navController: NavController) {}

  ngOnInit() {
  }
  loginRoute(){
    this.navController.navigateBack('/login');
  }
}
