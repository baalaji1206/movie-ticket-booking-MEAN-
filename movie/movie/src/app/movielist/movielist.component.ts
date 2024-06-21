import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ServiceService} from '../service/service.service'
import{Router} from '@angular/router'
import { UserService } from '../user.service';


@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  user:any;
  public movieList:any;
  constructor(private http:HttpClient , private us:ServiceService,private route:Router,private userService:UserService) { 
    this.user=this.userService.user;
    var a =this.us.getvalidate;
    if(!a){
      this.route.navigateByUrl('/login')
    }
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3200/lists').subscribe(data => {
      this.movieList = data;
  console.log(this.movieList);
});

  }
 sub()
 {
  this.us.setvalidate("")
 }
}
