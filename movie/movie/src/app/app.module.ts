import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { COMPOSITION_BUFFER_MODE, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MovielistComponent } from './movielist/movielist.component';
import { SeatComponent } from './seat/seat.component';
import { SeatbComponent } from './seatb/seatb.component';
import { SeatcComponent } from './seatc/seatc.component';
import { TicketsComponent } from './tickets/tickets.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { ConfirmComponent } from './seat/confirm/confirm.component';
import { FormGroup } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { PaymentComponent } from './payment/payment.component';





const routes:Routes = [
  {path:'',component:HomeComponent },
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'movielist',component:MovielistComponent},
  {path:'seat',component:SeatComponent},
  {path:'seatb',component:SeatbComponent},
  {path:'seatc',component:SeatcComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'admin',component:AdminComponent},
  {path:'payment',component:PaymentComponent}
 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    MovielistComponent,
    SeatComponent,
    SeatbComponent,
    SeatcComponent,
    TicketsComponent,
    ConfirmComponent,
    AdminComponent,
    PaymentComponent
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxQRCodeModule,
    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
