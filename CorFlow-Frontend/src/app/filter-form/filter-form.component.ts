// filter-form.component.ts

import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ApiService } from '../services/api.service';
import {NgxSliderModule, Options} from "@angular-slider/ngx-slider";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "../shared/data.service";


@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    NgxSliderModule,
    HttpClientModule
  ],
  styleUrls: ['./filter-form.component.scss']
})

export class FilterFormComponent implements OnInit {

  public responseList: any[] = []

  constructor(public router: Router, public apiService: ApiService, private dataService: DataService) { }

  filters: any = {
    frames: 32,
    age: 30,
    width: 58,
    height: 87,
    dominance: 'RIGHT',
    sex: 'F',
    occlusionAge: 7,
    occlusionLength: 7,
    syntaxScore: 25
  }

  // Ranges
  ageRange = { min: 0, max: 100 };
  widthRange = { min: 0, max: 200 };
  heightRange = { min: 0, max: 200 };
  occlusionLengthRange = { min: 0, max: 200 };
  syntaxScoreRange = { min: 0, max: 200 };

  ageOptions: Options = { floor: 0, ceil: 100 };
  widthOptions: Options = { floor: 0, ceil: 200 };
  heightOptions: Options = { floor: 0, ceil: 200 };
  occlusionLengthOptions: Options = { floor: 0, ceil: 200 };
  syntaxScoreOptions: Options = { floor: 0, ceil: 200 };


  //What should be in this method?
  ngOnInit() {
    // this.loadFilters();
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    console.log('Enter key pressed ');
    this.filterQuery();
  }

  filterQuery() {
    console.log('Submit pressed');
    this.apiService.getLesion(this.filters).subscribe({
      next: (results: any) => {
        console.log("Filter search results:", results);
        this.responseList = results;
        this.dataService.updateResponseList(this.responseList);
      },
      error: (error) => {
        console.error("Filter search failed:", error);
      }
    });
    console.log("Filters sent");
  }





  // updateRangeValue(event: any, attribute: string) {
  //   // @ts-ignore
  //   this[attribute] = event.target.value;
  // }

  // saveFilters(filters: any) {
  //   localStorage.setItem('filters', JSON.stringify(filters));
  // }
  //
  // loadFilters() {
  //   const savedFilters = localStorage.getItem('filters');
  //   if (savedFilters) {
  //     this.filters = JSON.parse(savedFilters) as Filters;
  //   }
  // }

  // exportFilters() {
  //   const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.filters));
  //   const downloadAnchorNode = document.createElement('a');
  //   downloadAnchorNode.setAttribute("href", dataStr);
  //   downloadAnchorNode.setAttribute("download", "filters.json");
  //   document.body.appendChild(downloadAnchorNode);
  //   downloadAnchorNode.click();
  //   downloadAnchorNode.remove();
  // }

}
