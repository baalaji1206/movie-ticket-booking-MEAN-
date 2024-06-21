import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  name: string ="";
  
  email: string ="";
  address: string ="";
  amount:Number =0;

  
router: any;
  constructor(private http: HttpClient)
  {
  }
 
  ngOnInit(): void
  {
  }
 
  payment()
  {
    let bodyData =
    {
      "name" : this.name,
      
      "email" : this.email,
      "address" : this.address,
       "amount" :this.amount,
      

    };
    this.http.post("http://localhost:9993/payment/create",bodyData).subscribe((resultData: any)=>
    {
       // console.log(resultData);
        alert("payment done Successfully")
        this.router.navigateByUrl('/home');
    });
  }
 
  save()
  {
    this.payment();
  }

}
