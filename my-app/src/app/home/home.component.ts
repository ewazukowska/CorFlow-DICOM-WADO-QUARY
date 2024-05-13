//home.component.ts
import { Component, HostListener } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {QueryFormComponent} from "../query-form/query-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [QueryFormComponent, RouterOutlet, RouterLink, RouterLinkActive],
  providers: [ QueryFormComponent ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public router: Router) { }

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
