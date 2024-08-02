import { Component, Inject  } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-histogram',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormField,
    MatSelect,
    MatOption,
    MatDialogActions,
    FormsModule,
    MatDialogTitle,
    MatButton,
    NgForOf
  ],
  templateUrl: './histogram.component.html',
  styleUrl: './histogram.component.css'
})
export class HistogramComponent {
  selectedVariable: string= '';
  variables: string[] =  ['age', 'width', 'height', 'dominance', 'sex', 'occlusionAge', 'occlusionLength', 'syntaxScore']


  constructor(
    public dialogRef: MatDialogRef<HistogramComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //this.variables = variables;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

onConfirm(): void {
  //this.dialogRef.close(this.selectedVariable);
  this.drawHistogram(this.selectedVariable);
}

drawHistogram(variable: string): void {
  const data = this.getDataForHistogram(variable); // All data for selected variable


  const chartData: ChartConfiguration<'bar'> = {
  type: 'bar',
  data: {
    labels: data.labels, // to be replacd with actual labels
    datasets: [
      {
        label: variable,
        data: data.values, // to be replaced with actual data
        backgroundColor: 'rgba(188, 143, 143, 0.2)',
        borderColor: 'rgba(128, 0, 0, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }
};

new Chart('histogramCanvas', chartData);
}

getDataForHistogram(variable: string): { labels: string[], values: number[] } {
  // Implement your logic to get data based on the selected variable
  return {
    labels: ['A', 'B', 'C', 'D', 'E'],
    values: [10, 20, 30, 40, 50]
  };
}
}
