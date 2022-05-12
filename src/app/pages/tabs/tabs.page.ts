import { Component } from '@angular/core';
import { AuthService } from '../../../app/services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selected: string;

  constructor(private authService: AuthService) {}

  setSelectedTab(evt) {
    this.selected = evt.tab;
  }
  close(){
    this.authService.logout();

  }
}
