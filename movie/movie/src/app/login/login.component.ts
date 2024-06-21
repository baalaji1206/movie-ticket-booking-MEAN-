import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent {
    email: string = '';
    password: string = '';
   
    isLogin: boolean = true;
    erroMessage: string = "";
  
    user:any;
   
    constructor(private router: Router,private http: HttpClient,private us:ServiceService,private route:Router,private userService:UserService) {}
   
    login() {
      console.log(this.email);
      console.log(this.password);
   
      let bodyData = {
        email: this.email,
        password: this.password,
      };
       this.userService.user={email:this.email}
      this.http.post("http://localhost:9993/student/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
           if(this.email=="admin")
           {
         
           this.router.navigateByUrl('/admin');
           }
           else
           {
            this.router.navigateByUrl('/movielist');
            this.us.setvalidate(this.email)
           }
          
    
 
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }

}