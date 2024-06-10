import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WineRatingDialogData } from '../models/WineRatingDialogData';
import { WineRatingRequest } from '../models/WineRatingRequest';
import { WineImageResponse } from '../models/WineImageResponse';
import { WineImageDialogData } from '../models/WineImageDialogData';

@Component({
  selector: 'app-dialog-wine-image-add',
  templateUrl: './dialog-wine-image-add.component.html',
  styleUrls: ['./dialog-wine-image-add.component.scss']
})
export class DialogWineImageAddComponent {
  @ViewChild('label') labelRef: ElementRef;

  selectedFile: File;

  constructor(
    public dialogRef: MatDialogRef<DialogWineImageAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WineImageDialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onFileChange(event): void {
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    const label = this.labelRef.nativeElement.value;

    if (!this.selectedFile || label === '') {
      return;
    }

    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append('label', label);

    this.dialogRef.close(uploadImageData);
  }
}
