import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isUserDataVisible: boolean = false;

  @Output() userDataToggled = new EventEmitter<boolean>();

  toggleUserData() {
    this.isUserDataVisible = !this.isUserDataVisible;
    this.userDataToggled.emit(this.isUserDataVisible);
  }
}
