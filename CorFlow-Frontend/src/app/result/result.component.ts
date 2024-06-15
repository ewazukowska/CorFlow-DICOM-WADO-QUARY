import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})

export class ResultComponent {
  currentIndex: number = 0;

  dataList = [
    {
      title: 'Item 1',
      description: 'This is the description for item 1.',
      info: [
        { key: 'Detail 1', value: 'Value 1' },
        { key: 'Detail 2', value: 'Value 2' },
        { key: 'Detail 3', value: 'Value 3' }
      ]
    },
    {
      title: 'Item 2',
      description: 'This is the description for item 2.',
      info: [
        { key: 'Detail 1', value: 'Value 1' },
        { key: 'Detail 2', value: 'Value 2' },
        { key: 'Detail 3', value: 'Value 3' }
      ]
    },
    // Dodaj więcej obiektów według potrzeby
  ];
  studyId: any;
  numberOfStudies: any;
  patientId: any;

  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.dataList.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.dataList.length - 1) ? this.currentIndex + 1 : 0;
  }

  showHistogram() {
  }

}
