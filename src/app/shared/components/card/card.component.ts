import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() content!: string;

  isAndroid!: boolean;

  constructor(private platform : Platform) { }

  ngOnInit() {
    this.isAndroid = this.platform.is('android');

   }

}
