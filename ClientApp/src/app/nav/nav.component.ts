import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isAuth : any;
  b: any;
  menuItems = ['dashboard', 'profile', 'requests'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private AuthService:AuthService) {}
  ngOnInit(): void {
      this.isAuth = localStorage.getItem('isAuth');
      this.b = localStorage.getItem('role');
      console.log(this.isAuth)
  }

  logout(){
    this.AuthService.logout();
  }
}
