import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import InputTableService from '../services/input-table.service';

@Component({
    selector: 'app-input-table',
    templateUrl: './input-table.component.html',
    styleUrls: ['./input-table.component.css']
})

export class InputServiceTableComponent implements OnInit {
    // displayedColumns: string[] = ['id', 'email', 'name', 'avatar'];
    dataSource;

    getUserDataModel = new FormGroup({
        contacto_id: new FormControl(''),
        fec_registro: new FormControl(''),
        tema_id: new FormControl(''),
        origen: new FormControl(''),
        nombre: new FormControl(''),
        estado: new FormControl(''),
        poblacion: new FormControl(''),
        email: new FormControl(''),
        comentario: new FormControl(''),
        estatus: new FormControl(''),
        espera_resp: new FormControl(''),
        telefono: new FormControl(''),
        tipo_cont: new FormControl(''),
        fec_asigna: new FormControl(''),
        fec_cliente: new FormControl(''),
        fec_cierre: new FormControl(''),
        motivo_cierre: new FormControl(''),
    });

    constructor(private provideServive: InputTableService) { }

    ngOnInit(): void {
        console.log('Has entrado a ngOnInit.');

        this.provideServive.getAllEntries().subscribe(response => {
            console.log('Consultando getContactUsData: ');
            console.log(response);
            this.getUserDataModel.patchValue({
                // Sobreescribe la info del form y le asigna nuevos valores
                contacto_id: response.contacto_id,
                fec_registro: response.fec_registro,
                tema_id: response.tema_id,
                origen: response.origen,
                nombre: response.nombre,
                estado: response.estado,
                poblacion: response.poblacion,
                email: response.email,
                comentario: response.comentario,
                estatus: response.estatus,
                espera_resp: response.espera_resp,
                telefono: response.telefono,
                tipo_cont: response.tipo_cont,
                fec_asigna: response.fec_asigna,
                fec_cliente: response.fec_cliente,
                fec_cierre: response.fec_cierre,
                motivo_cierre: response.motivo_cierre,
            });
        });

        console.log('Userdatamodel: ');
        console.log(this.getUserDataModel);
    }
}
