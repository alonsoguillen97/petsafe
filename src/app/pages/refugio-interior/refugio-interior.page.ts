import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-refugio-interior',
  templateUrl: './refugio-interior.page.html',
  styleUrls: ['./refugio-interior.page.scss'],
})
export class RefugioInteriorPage implements OnInit {

  refugio: User;

  constructor() { }

  ngOnInit() {
    this.refugio = history.state.refugio;
    console.log(this.refugio);
  }

}
