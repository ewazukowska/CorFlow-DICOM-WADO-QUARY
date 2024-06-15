// filter-form.component.ts

import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ApiService } from "./api.service";
import {NgxSliderModule, Options} from "@angular-slider/ngx-slider";
import {HttpClientModule} from "@angular/common/http";

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

  constructor(public router: Router)
  //constructor(public router: Router, public apiService: ApiService)
  { }

  frame: number = 32;
  age: number = 30;
  x: number = 7;
  y: number = 333;
  width: number = 58;
  height: number = 87;
  dominance: string = 'RIGHT'; // Default value
  sex: string = 'F';
  occlusionAge: number = 7;
  occlusionLength: number = 7;
  syntaxScore: number = 25;

  // Zakresy
  ageRange = { min: 0, max: 100 };
  frameRange = { min: 0, max: 100 };
  xRange = { min: 0, max: 500 };
  yRange = { min: 0, max: 500 };
  widthRange = { min: 0, max: 200 };
  heightRange = { min: 0, max: 200 };
  occlusionAgeRange = { min: 0, max: 200 };
  occlusionLengthRange = { min: 0, max: 200 };
  syntaxScoreRange = { min: 0, max: 200 };

  ageOptions: Options = { floor: 0, ceil: 100 };
  frameOptions: Options = { floor: 0, ceil: 100 };
  xOptions: Options = { floor: 0, ceil: 500 };
  yOptions: Options = { floor: 0, ceil: 500 };
  widthOptions: Options = { floor: 0, ceil: 200 };
  heightOptions: Options = { floor: 0, ceil: 200 };
  occlusionAgeOptions: Options = { floor: 0, ceil: 200 };
  occlusionLengthOptions: Options = { floor: 0, ceil: 200 };
  syntaxScoreOptions: Options = { floor: 0, ceil: 200 };


  ngOnInit() {
    this.loadFilters();
  }

  updateRangeValue(event: any, attribute: string) {
    // @ts-ignore
    this[attribute] = event.target.value;
  }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    console.log('Wciśnięto klawisz Enter');
    this.filterQuery();
  }

  query: string = '';

  // filterQuery() {
  //   this.exportFilters()
  //   const filters = {
  //     frame: this.frame,
  //     x: this.x,
  //     y: this.y,
  //     width: this.width,
  //     height: this.height,
  //     dominance: this.dominance,
  //     sex: this.sex,
  //     age: this.age,
  //     occlusionAge: this.occlusionAge,
  //     occlusionLength: this.occlusionLength,
  //     syntaxScore: this.syntaxScore,
  //     // Add other selected filters here
  //   };
  //   console.log('Filters applied:', filters);
  //   this.saveFilters(filters);
  //   // Perform the query with the selected filters
  //   this.router.navigate(['results']).then((success) => {
  //     if (success) {
  //       console.log('Navigated to results successfully!');
  //     } else {
  //       console.log('Navigation failed!');
  //     }
  //   });
  // }


  filterQuery() {
    const filters = {
      frame: this.frame,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      dominance: this.dominance,
      sex: this.sex,
      occlusionAge: this.occlusionAge,
      occlusionLength: this.occlusionLength,
    };
    console.log('Wciśnięto klawisz submit');
    //this.apiService.sendFilters(filters);
    console.log('Wysłano filtry');
  }



  saveFilters(filters: any) {
    localStorage.setItem('filters', JSON.stringify(filters));
  }

  loadFilters() {
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters) {
      const filters = JSON.parse(savedFilters);
      this.frame = filters.frame || 0;
      this.x = filters.x || 0;
      this.y = filters.y || 0;
      this.width = filters.width || 0;
      this.height = filters.height || 0;
      this.dominance = filters.dominance || 'RIGHT';
      this.sex = filters.sex || 'F';
      this.age = filters.age || 30;
      this.occlusionAge = filters.occlusionAge || 7;
      this.occlusionLength = filters.occlusionLength || 7;
      this.syntaxScore = filters.syntaxScore || 25
      // Load other filters if available
    }
  }

  exportFilters() {
    const filters = {
      frame: this.frame,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      dominance: this.dominance,
      sex: this.sex,
      age: this.age,
      occlusionAge: this.occlusionAge,
      occlusionLength: this.occlusionLength,
      syntaxScore: this.syntaxScore,
      // Add other selected filters here
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filters));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "filters.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }


}
