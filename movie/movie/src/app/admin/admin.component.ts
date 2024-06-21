import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  nameid="";
  name: string ="";
  
  screen: string ="";
  ticket: string ="";
  path:string="";
router: any;
  movie: Object | any;
  constructor(private http: HttpClient)
  {
    this.getAllStudent();
  }
  getAllStudent() {
 
    this.http.get("http://localhost:9990/student/getAll")
    .subscribe((resultData: any)=>
    {
      
        console.log(resultData);
        this.movie = resultData.data;
    });
 
 
  }
  
  setUpdate(data:any)
  {
    this.name = data.name;
   this.screen = data.screen;
   this.ticket = data.ticket;
 this.path=data.path;
   this.nameid = data._id;
  
  }
  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "screen" : this.screen,
      "ticket" : this.ticket,
      "path":this.path
      
 
    };
    
    this.http.patch("http://localhost:9990/student/update"+ "/"+this.nameid,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movie Updateddd")
        this.getAllStudent();
      
    });
  }
  setDelete(data: any) {
    this.http.delete("http://localhost:9990/student/delete"+ "/"+ data._id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movie Deleted")
        this.getAllStudent();
  
    });
    }
  ngOnInit(): void
  {
    this.http.get('http://localhost:3000/lists').subscribe(Response=>{
        if(Response){
          console.log("data received");
        }
        console.log(Response);
        this.movie=Response;
      })
  }
  submit()
  {
    if(this.nameid== '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }

  register()
  {
    let bodyData =
    {
      "name" : this.name,
      
      "screen" : this.screen,
      "ticket" : this.ticket,
      "path":this.path
    };
    
    this.http.post("http://localhost:9990/student/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Movie Added")

    });
  }
 
  save()
  {
    this.register();
  }

}
