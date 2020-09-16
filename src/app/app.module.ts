import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { OrderProgressComponent } from './components/order-progress/order-progress.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListadoOrdenesComponent } from './components/listado-ordenes/listado-ordenes.component';
import { MatTableModule } from '@angular/material/table';
import { EnvioComponent } from './components/envio/envio.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    OrderProgressComponent,
    LoginComponent,
    ListadoOrdenesComponent,
    EnvioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
