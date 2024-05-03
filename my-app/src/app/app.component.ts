//app.component.ts
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    console.log('Wciśnięto klawisz Enter');
    this.navigateToQueryForm();
  }

  navigateToQueryForm() {
    this.router.navigate(['query-form']).then((success) => {
      if (success) {
        console.log('Navigated to query-form successfully!');
      } else {
        console.log('Navigation failed!');
      }
    });
  }
}
