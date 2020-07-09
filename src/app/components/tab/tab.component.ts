import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {


  @Input("title") title:string;
  @Input("active") active:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
