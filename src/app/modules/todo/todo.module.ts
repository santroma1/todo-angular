import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';

import { TodoItemComponent } from 'src/app/components/todo-item/todo-item.component';
import { TodoFormComponent } from 'src/app/components/todo-form/todo-form.component';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SingleFormContainerComponent } from 'src/app/components/single-form-container/single-form-container.component';



@NgModule({
  declarations: [
      TodoListComponent,
      TodoFormComponent,
      TodoItemComponent,
      SingleFormContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
