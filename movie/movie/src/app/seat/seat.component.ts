import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import{ServiceService} from '../service/service.service'
import{Router} from '@angular/router'

import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})


export class SeatComponent implements OnInit  {
  user:any;
  name:string="";
  title='blog';
  data="bruce";
    movie:string="";
    stime: string ="";
    sdate: string ="";
    row: string ="";
    not:String="";
  router: any;
form: FormGroup;
public movielist:any;
    constructor(private http: HttpClient,private fb: FormBuilder ,private us:ServiceService,private route:Router,private userService:UserService)
    {
        this.user=this.userService.user;
        
      var a =this.us.getvalidate;
      if(!a){
        this.route.navigateByUrl('/login')}
        
      this.form = this.fb.group({
        dropdownValue1: [''],
        newDropValue: [''],
        dropdownValue:[''],
        dropdownValue2:['']
        

      });
    }
    
    onSubmit() {
      console.log(this.movie);
      console.log(this.form.value);
      console.log(this.form.controls['dropdownValue1'].value);
      console.log(this.form.controls['newDropValue'].value);
      console.log(this.form.controls['dropdownValue'].value);
      console.log(this.form.controls['dropdownValue2'].value);
    }
    ngOnInit(): void
    {
      this.http.get('http://localhost:3000/products').subscribe(Response=>{
        if(Response){
          console.log("data received");
        }
        console.log(Response);
        this.movielist=Response;
      })
    }
   
    register()
    {
      let bodyData =
      {
        "name":this.user.email,
        "movie":"Joker",
        "row" : this.form.controls['dropdownValue1'].value,
        "sdate" : this.form.controls['newDropValue'].value,
         "stime" : this.form.controls['dropdownValue'].value,
         "not" : this.form.controls['dropdownValue2'].value,
      };

      
      this.http.post("http://localhost:9992/users/create",bodyData).subscribe((resultData: any)=>
      {
          console.log(resultData);
          alert("Tickets Booked")
         
          
      });
    }
   
    save()
    {
      this.register();
    }
    sub()
 {
  this.us.setvalidate("")
 }
  
  }
  
 
  

