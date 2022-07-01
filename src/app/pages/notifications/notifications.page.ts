import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Notification } from 'src/app/models/Notification';
import { AuthService } from 'src/app/services/auth.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Notification[] = [];

  constructor(private apiService: AuthService,
    private alertCtrl: AlertController,
    private utilitiesService: UtilitiesService,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.apiService.getEntity('received-notifications').subscribe(async (notifications: Notification[]) => {
      this.notifications = notifications;
    });
  }

  public async deleteNotification(notification: Notification) {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar notificacion',
      message: '¿Quieres eliminar la notificación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            
            this.apiService.deleteEntity('notification', notification.id).subscribe((res) => {
              console.log(res);
              this.apiService.getEntity('received-notifications').subscribe(async (notifications: Notification[]) => {
                this.notifications = notifications;
                console.log(this.notifications);
              });
              this.utilitiesService.showToast('Notificación eliminada correctamente');
            }, error => {
              console.log(error);
              this.utilitiesService.showToast('Error al eliminar la notificación');
              
            });
          }
        }
      ]
    });

    await alert.present();

  }

}
