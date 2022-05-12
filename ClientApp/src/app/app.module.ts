import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './Dialog/edit/edit.component';
import { DeleteComponent } from './Dialog/delete/delete.component';
import { HomeComponent } from './Home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './Services/services.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AddComponent } from './Dialog/add/add.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Routes } from '@angular/router';
import { ViewComponent } from './Dialog/view/view.component';
import { InfoComponent } from './Dialog/info/info.component';
import { LoginComponent } from './login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { FilesviewComponent } from './filesview/filesview.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeDialogComponent } from './qr-code-dialog/qr-code-dialog.component';
import { HomeresponsableComponent } from './homeresponsable/homeresponsable.component';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';

const routes: Routes = [];



@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DeleteComponent,
    HomeComponent,
    ViewComponent,
    AddComponent,
    InfoComponent,
    LoginComponent,
    UploadfileComponent,
    FilesviewComponent,
    QrCodeDialogComponent,
    HomeresponsableComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatCheckboxModule,
    QRCodeModule,
    IonicModule.forRoot(),
    ScrollingModule




  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
  entryComponents: [AddComponent, EditComponent, DeleteComponent, ViewComponent]

})
export class AppModule { }
