import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seatc',
  templateUrl: './seatc.component.html',
  styleUrls: ['./seatc.component.css']
})

export class SeatcComponent  {

  movie:string="";
  stime: string ="";
  sdate: string ="";
  row: string ="";
  not:String="";
router: any;
form: FormGroup;
  constructor(private http: HttpClient,private fb: FormBuilder)
  {
    this.form = this.fb.group({
      dropdownValue1: [''],
      newDropValue: [''],
      dropdownValue:[''],
      dropdownValue2:['']

    });
  }
  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.controls['dropdownValue1'].value);
    console.log(this.form.controls['newDropValue'].value);
    console.log(this.form.controls['dropdownValue'].value);
    console.log(this.form.controls['dropdownValue2'].value);
  }
  ngOnInit(): void
  {
  }
 
  register()
  {
    let bodyData =
    {
      "movie":"Phantom",
      "row" : this.form.controls['dropdownValue1'].value,
      "sdate" : this.form.controls['newDropValue'].value,
       "stime" : this.form.controls['dropdownValue'].value,
       "not" : this.form.controls['dropdownValue2'].value
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

}
