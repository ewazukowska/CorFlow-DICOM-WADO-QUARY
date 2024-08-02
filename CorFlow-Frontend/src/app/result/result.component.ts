import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HistogramComponent} from "../histogram/histogram.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})

export class ResultComponent {
  currentIndex: number = 0;
  studyId: number = 35;
  numberOfStudies: number = 287;
  patientId: any;

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
  ];
  constructor(public dialog: MatDialog) {

  }


  prevSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.dataList.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.dataList.length - 1) ? this.currentIndex + 1 : 0;
  }

  showHistogram() {
    const dialogRef = this.dialog.open(HistogramComponent, {
      width: '400px',
      height: '500px',

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Selected variable:', result);
      }
    });
  }

}
