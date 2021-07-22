import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(private route: Router, private menu: MenuController) { }

  ngOnInit() {}

  onMenuItemClick(urlSegment) {
    this.route.navigate([urlSegment]);
    this.menu.close();
  }
}
