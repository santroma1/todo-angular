import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {

    @ContentChildren(TabComponent) tabs:QueryList<TabComponent>;
    @Output() selectedTab = new EventEmitter();

  constructor(
  ) { }

    ngAfterContentInit(): void {
        const activeTabs = this.tabs.filter(tab=>tab.active);
        if(!activeTabs.length){
            this.onSelect(this.tabs.first);
        }
    }

  ngOnInit(): void {
  }


  onSelect(tab:TabComponent){
      this.tabs.toArray().forEach((tabItem)=> tabItem.active = false );
      tab.active=true;
      this.selectedTab.emit(tab);
  }

}
