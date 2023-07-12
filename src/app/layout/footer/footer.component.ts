import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  isAndroid!: boolean;
  isIos!:boolean
  isDesktop!: boolean;

constructor(public  platform : Platform) { }

ngOnInit() { 

  // this.isAndroid = this.platform.is('android');
  // this.isIos = this.platform.is('ios');
  this.isDesktop = this.platform.is('desktop');

}


}
