import { Component, Inject  } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";


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
    this.dialogRef.close(this.selectedVariable);
  }
}
