import { Component, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
  styleUrls: ['toast.component.scss']
})
export class ToastComponent {
  @Input() message!: string;
  @Input() duration!: number;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: this.message,
      duration: this.duration
    });
    toast.present();
  }
}
