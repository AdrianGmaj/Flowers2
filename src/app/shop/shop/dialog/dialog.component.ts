import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductResponse } from 'src/app/services/products/ProductResponse';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductResponse,
    ) { }

    

  ngOnInit() {
  }
  close() {
    this.dialogRef.close()
  }

  addProduct(product: ProductResponse): void {
   
  }
}
