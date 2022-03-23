import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


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
