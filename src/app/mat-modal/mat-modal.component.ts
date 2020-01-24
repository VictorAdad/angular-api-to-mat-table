import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleEntry, DialogData } from '../models/entry.model';
import InputTableService from '../services/input-table.service';

@Component({
    selector: 'app-mat-modal',
    templateUrl: './mat-modal.component.html',
    styleUrls: ['./mat-modal.component.css']
})

// @Component({
//     selector: 'dialog-overview-example-dialog',
//     templateUrl: 'dialog-overview-example-dialog.html',
// })

export class MatModalComponent {

    constructor(public dialogRef: MatDialogRef<MatModalComponent>,
        private provideServive: InputTableService,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
        // Inicializando la modal
        console.log('Has seleccionado el ID: ', data.contacto_id);
        this.provideServive.getSingleEntry(data.contacto_id).subscribe((response) => {
            const singleEntryData = response;
            console.log('Single Entry Data:', singleEntryData);
        })
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
