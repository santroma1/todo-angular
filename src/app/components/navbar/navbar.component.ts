import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
  }

  onTodoButtonClick():void{
      this.router.navigate(['/todolist']);
  }

}
