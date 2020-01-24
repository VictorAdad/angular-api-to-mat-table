import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { InputServiceTableComponent } from './input-table/input-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AngularMaterialModule } from './my-material.module';
import { MatModalComponent } from './mat-modal/mat-modal.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        InputServiceTableComponent,
        MatModalComponent,
    ],
    entryComponents: [
        MatModalComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        AngularMaterialModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
