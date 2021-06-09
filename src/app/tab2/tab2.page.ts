import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  user = null;

  constructor(private authServ: AuthService) {}

  ionViewWillEnter() {
    this.user = this.authServ.getUser();
  }

  logout() {
    this.authServ.logout();
  }
}
