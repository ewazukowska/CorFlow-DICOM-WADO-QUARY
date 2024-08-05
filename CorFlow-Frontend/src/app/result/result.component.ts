import {Component, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HistogramComponent} from "../histogram/histogram.component";
import {MatDialog} from "@angular/material/dialog";
import { DataService } from '../shared/data.service';
import { Lesion } from '../models/lesions.model';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FormsModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})

export class ResultComponent implements OnInit {
  currentIndex: number = 0;
  id: any;
  numberOfStudies: any;
  patientId: any;
  dataList: Lesion[] = [];

  constructor(public dialog: MatDialog, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.currentResponseList.subscribe(data => {
      this.dataList = data;
      this.updatePatientInfo();
    });
  }

  updatePatientInfo() {
    if (this.dataList.length > 0) {
      this.patientId = this.dataList[this.currentIndex].attributes.globalId || '';
      this.numberOfStudies = this.dataList.length;
      this.id = this.dataList[this.currentIndex].id || '';
    }
  }





  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.dataList.length - 1;
    }
    this.updatePatientInfo();
  }

  nextSlide() {
    if (this.currentIndex < this.dataList.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updatePatientInfo();
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
