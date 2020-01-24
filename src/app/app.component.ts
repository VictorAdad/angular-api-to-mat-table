import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
// import { SingleEntry, DialogData } from './models/entry.model';
import { MatModalComponent } from './mat-modal/mat-modal.component';
import { MatSort } from '@angular/material/sort';
import InputTableService from './services/input-table.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Declaraciones
    public RESPONSE_DATA;
    displayedColumns: string[] = ['contacto_id', 'nombre', 'email', 'fec_registro'];
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    public dataSource = new MatTableDataSource;

    constructor(private provideServive: InputTableService,
        private cdr: ChangeDetectorRef,
        public dialog: MatDialog) { }

    ngOnInit() {
        // Obtener la data del servicio de Christian
        this.provideServive.getAllEntries().subscribe((response) => {
            console.log('Consultando response_data: ');
            this.RESPONSE_DATA = response;
            console.log(this.RESPONSE_DATA);
            //this.dataSource = new MatTableDataSource<SingleEntry>(this.RESPONSE_DATA);
            this.dataSource.data = this.RESPONSE_DATA;
            this.dataSource.paginator = this.paginator;
            // Nuevo intento de ordenar la tabla
            this.sort.sort(({ id: 'fec_registro', start: 'desc' }) as MatSortable);
            this.dataSource.sort = this.sort;
            // A ver si detecta los cambios
            this.cdr.detectChanges();
            console.log('¡Has concluido tu viaje por ngAfterViewInit. El paginator y el sort de la tabla DBERÍAN estar listos.');
        });
    }

    getRecord(row) {
        console.log(row.comentario);
    }

    openDialog(row): void {
        const dialogRef = this.dialog.open(MatModalComponent, {
            width: '60%',
            data: {
                comment: row.comentario,
                contacto_id: row.contacto_id,
                nombre: row.nombre,
                email: row.email,
                fec_registro: row.fec_registro,
                origen: row.origen,
                telefono: row.telefono,
                tema_id: row.tema_id
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed; ', result);
            // this.animal = result;
        });
    }
}
