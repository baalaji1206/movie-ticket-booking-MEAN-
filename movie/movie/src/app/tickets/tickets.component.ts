import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
export class movie{constructor (public val:string,public val2:string){}}
export class Data{
  constructor(public sdate:any,public movie:any){}
}

@Component({
  selector: 'app-seat',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})


export class TicketsComponent implements OnInit  {
public disp:movie=new movie("","")
  
  movie:string="";
  sdate: string ="";
form: FormGroup ;
dates:String="";
public movielist:any;
public list:any;
public data:Data=new Data(null,null);
    constructor(private http: HttpClient,private fb: FormBuilder)
    {
      this.form = this.fb.group({
        newDropValue: [''],
        dropdownValue2:['']
      });
    }
    submit(data:any)
    {
      let bodyData =
      {
       
        "movie":"Joker",
        "sdate" :this.form.controls['newDropValue'].value
      };
      
      

      console.log("val2"+this.data.sdate)
      let queryParams = new HttpParams().append("date",this.data.sdate).append("movie",this.data.movie);
      console.log(queryParams);
      this.http.get("http://localhost:3201/view",{params:queryParams}).subscribe((resultData: any)=>
      {
        if(resultData){
          console.log("data received");
        }
        console.log(resultData);
        this.list=resultData;
      });
        

    }
    ngOnInit(): void
    {
      // this.http.get('http://localhost:3001/products').subscribe(Response=>{
      //   if(Response){
      //     console.log("data received");
      //   }
      //   console.log(Response);
      //   this.movielist=Response;
      // })
      // this.http.get('http://localhost:3200/movie').subscribe(Response=>{
      //   if(Response){
      //     console.log("data received");
      //   }
      //   console.log(Response);
      //   this.list=Response;
      // })
    }
   
    
   
    
  }
  

