import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeleteComponent } from 'src/app/Dialog/delete/delete.component';
import { EditComponent } from 'src/app/Dialog/edit/edit.component';
import { Model } from 'src/app/Model/Model';
import { ServicesService } from 'src/app/Services/services.service';
import { AddComponent } from '../../Dialog/add/add.component';
import { VERSION } from '@angular/core';
import { ViewComponent } from 'src/app/Dialog/view/view.component';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { InfoComponent } from 'src/app/Dialog/info/info.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //employees: any[] = [];
  DataSource: MatTableDataSource<any> = new MatTableDataSource<any>(

  );
  resultsLength: number = 0;
  RefreshUsers = new BehaviorSubject<boolean>(true)
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  angularVersion = VERSION.full;
  users: any;


  constructor(
    private ServicesService: ServicesService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.users = this.RefreshUsers.pipe(switchMap(this.ServicesService.GetAllUsers())).subscribe();
    this.GetAllUsers()


  }
  GetAllUsers() {
    this.ServicesService.GetAllUsers().subscribe(
      (Users: any) => {
        this.DataSource.data = Users;
        this.users = this.DataSource.connect();
        console.log(this.users);
        this.DataSource.paginator = this.paginator;
        this.resultsLength = this.DataSource.data.length;
        // this.ref.detectChanges();
        console.log(this.users);


      },
      (error: any) => {
        console.log('Error (GetAllData) :: ' + error);
      }
    );

  }
  AddNewUser() {
    this.dialog.open(AddComponent, {
      maxHeight: '90vh'
    });

    // this.ref.detectChanges();

  }
  GetInfo() {
    this.dialog.open(InfoComponent);
  }

  DeleteUser(User: Model) {
    this.dialog.open(DeleteComponent, {
      data: {
        id: User.id,
        nom: User.nom,
        prenom: User.prenom,
        email: User.email,
        motpasse: User.motpasse,
        role: User.role,

      },
    });
    // this.ref.detectChanges();

  }
  EditUser(User: Model) {
    this.dialog.open(EditComponent, {
      data: {
        id: User.id,
        nom: User.nom,
        prenom: User.prenom,
        email: User.email,
        motpasse: User.motpasse,
        role: User.role,

      },
      maxHeight: '90vh'
    });
    // this.ref.detectChanges();

    console.log(User.id + ' From parent component');
  }
  ViewUser(User: any) {
    this.dialog.open(ViewComponent, {
      data: {
        id: User.id,
        nom: User.nom,
        prenom: User.prenom,
        email: User.email,
        motpasse: User.motpasse,
        role: User.role,

      },
    });
  }
  applyFilter(event: Event) {
    console.log("Filting")
    const filterValue = (event.target as HTMLInputElement).value;
    this.DataSource.filter = filterValue.trim().toLowerCase();

    if (this.DataSource.paginator) {
      this.DataSource.paginator.firstPage();
    }
  }
}
