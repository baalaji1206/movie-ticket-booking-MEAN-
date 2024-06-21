import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})


export class SeatComponent  {

    stime: string ="";
    
    sdate: string ="";
    row: string ="";
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
        "stime" : this.stime,
        
        "sdate" : this.sdate,
        "row" : this.row,
      };
      this.http.post("http://localhost:9992/user/create",bodyData).subscribe((resultData: any)=>
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
  

