// filter-form.component.ts

import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { ApiService } from '../services/api.service';
import {NgxSliderModule, Options} from "@angular-slider/ngx-slider";
import {HttpClientModule} from "@angular/common/http";
import { Filters } from '../models/filters.model';
import { error } from 'console';

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

  constructor(public router: Router, public apiService: ApiService) { }

  filters: any = {
    frames: 32,
    age: 30,
    x: 7,
    y: 333,
    width: 58,
    height: 87,
    dominance: 'RIGHT',
    sex: 'F',
    occlusionAge: 7,
    occlusionLength: 7,
    syntaxScore: 25
  }

  responseBlob: Blob | null = null;

  // Ranges
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

  filterQuery() {
    console.log('Submit pressed');
    this.apiService.postJson(this.filters).subscribe({
      next: (results: Blob) => {
        console.log("Search results:", results);
        this.responseBlob = results;
      },
      error: (error) => {
        console.error("Search failed:", error);
      }
    });
    console.log("Filters sent");
  }

  saveFilters(filters: any) {
    localStorage.setItem('filters', JSON.stringify(filters));
  }

  loadFilters() {
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters) {
      this.filters = JSON.parse(savedFilters) as Filters;
    }
  }

  exportFilters() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.filters));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "filters.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
}
