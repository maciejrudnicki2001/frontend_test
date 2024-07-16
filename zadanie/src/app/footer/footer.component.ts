import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isPanelVisible: boolean = false;
  isUserDataVisible: boolean = false;

  togglePanel() {
    this.isPanelVisible = !this.isPanelVisible;
  }

  toggleUserData(isVisible: boolean) {
    this.isUserDataVisible = isVisible;
    console.log('User data visibility in footer:', this.isUserDataVisible);
  }
}
