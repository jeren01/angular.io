import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDisabled = true;
  name = 'Reset User';

  // filterName: string;
  disable() {
    if (this.isDisabled) {
      this.isDisabled = false;
      this.name = 'Reset User';
    } else {
      this.isDisabled = true;
      this.name = 'Reset User';
    }
    
  }
  
}
