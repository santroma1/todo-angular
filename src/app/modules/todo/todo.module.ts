import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoItemComponent } from 'src/app/components/todo-item/todo-item.component';
import { TodoFormComponent } from 'src/app/components/todo-form/todo-form.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SingleFormContainerComponent } from 'src/app/components/single-form-container/single-form-container.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { TabComponent } from '../../components/tab/tab.component';
import { EmptyHrefDirective } from '../../directives/empty-href.directive';
import { FilterPipe } from '../../pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
      TodoListComponent,
      TodoFormComponent,
      TodoItemComponent,
      SingleFormContainerComponent,
      TabsComponent,
      TabComponent,
      EmptyHrefDirective,
      FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule,
    HttpClientModule
  ]
})
export class TodoModule { }
