import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

    name: string ="";
    
    email: string ="";
    password: string ="";
  router: any;
    constructor(private http: HttpClient)
    {
    }
   
    ngOnInit(): void
    {
    }
   
    register()
    {
      let bodyData =
      {
        "name" : this.name,
        
        "email" : this.email,
        "password" : this.password,
      };
      
      this.http.post("http://localhost:9993/student/create",bodyData).subscribe((resultData: any)=>
      {
          console.log(resultData);
          alert("User  Registered Successfully")
          this.router.navigateByUrl('/login');
      });
    }
   
    save()
    {
      this.register();
    }
  
  }
  