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
  selectedVariable: string= 'ewa';
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
  const data = this.getDataForVariable(variable); // Implement this method to get data for the selected variable

  const chartData: ChartConfiguration<'bar'> = {
  type: 'bar',
  data: {
    labels: data.labels, // Replace with actual labels
    datasets: [
      {
        label: variable,
        data: data.values, // Replace with actual data
        backgroundColor: 'rgba(188, 143, 143, 0.2)', // Kolor tła słupków #BC8F8F
        borderColor: 'rgba(128, 0, 0, 1)', // Kolor obramowania słupków #800000
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

getDataForVariable(variable: string): { labels: string[], values: number[] } {
  // Implement your logic to get data based on the selected variable
  // For example purposes, returning dummy data
  return {
    labels: ['A', 'B', 'C', 'D', 'E'],
    values: [10, 20, 30, 40, 50]
  };
}
}
