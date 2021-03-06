import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {


 
  
  public pages = [
    { tab: 'pets', name: 'Mascotas', icon: 'assets/icon/huella.svg' },
    { tab: 'refugios', name: 'Refugios', icon: 'assets/icon/huella.svg' },
    { tab: 'info', name: 'Información', icon: 'assets/icon/huella.svg' },
    { tab: 'qr', name: 'QR', icon: 'assets/icon/qr.svg' },
    { tab: 'refugio-profile', name: 'Perfil', icon: 'assets/icon/huella.svg' },
    { tab: 'user-profile', name: 'Perfil', icon: 'assets/icon/huella.svg' },

    
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
