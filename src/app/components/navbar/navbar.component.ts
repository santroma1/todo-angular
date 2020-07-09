import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(  private activatedRoute:ActivatedRoute,
                private router:Router,
                private userService:UserServiceService ) { }

  ngOnInit(): void {
  }

  onTodoButtonClick():void{
      this.router.navigate(['/todolist']);
  }


  logout(){
      this.userService.isAuthenticated = false;
      this.router.navigate(["login"]);
  }

}
