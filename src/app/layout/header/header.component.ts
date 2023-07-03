import { Component, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Output() contentId!:boolean

  constructor() { }

  ngOnInit() {}

}
