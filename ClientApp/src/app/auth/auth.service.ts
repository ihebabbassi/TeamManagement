import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from "./auth-data.model";
import { RegData } from "./reg-data.model";
import { Subject, windowWhen } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root"})
export class AuthService {
  private isAuthenticated = false;
  user : any;
  public userEmail : any;
  public userId : any;
  public identifiant: any;
  public profession:any;
  public status: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router){}


  getIsAuth(){
    return this.isAuthenticated;
  }


  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }



    async login(email: string ,password: string ) {
      this.userEmail = email;
      const authData: AuthData = {email: email, password : password};
      console.log(authData);
      //http://localhost:3000/users?email=
      //http://localhost:56350/api/users/login/
   this.user = await this.http.get("http://localhost:3000/users?email="+email).toPromise();
   console.log(this.user);
   if(this.user && this.user.password == password){
   localStorage.setItem("userId", this.user.id);
   localStorage.setItem("role", this.user.role);
   console.log(this.user.role);
   localStorage.setItem("email", this.user.email);
   localStorage.setItem("name", this.user.firstname);
   localStorage.setItem("isAuth", 'true');
   this.isAuthenticated = true;
    
   if(this.user.role == 'Admin'){
     console.log("admin")
    this.router.navigate(['/admin'])
   }else{  window.location.reload();
     this.router.navigate(['/requests']);}
   }
   else{ console.log('verifier pass')}
    }

  getUserId() {
    return  this.identifiant;
  }
  getUserType(){
    let profession = this.userId.profession;
    let status = this.userId.status;
    console.log(profession);
    return profession;
  }



    logout(){
      window.location.reload();
      localStorage.removeItem("userId");
      localStorage.removeItem("role");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.setItem("isAuth", 'false');
      this.router.navigate(['/']);
      //window.location.reload();
    }



}
