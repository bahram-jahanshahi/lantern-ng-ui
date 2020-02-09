import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  isSideBarOpened = true;
  sideNavMode = 'side';

  constructor() {
  }

  ngOnInit() {
  }

  fa() {
  }

  en() {
  }

  sideBarClicked(to: string) {
  }
}
