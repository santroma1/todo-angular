import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';
import { SingleFormContainerComponent } from 'src/app/components/single-form-container/single-form-container.component';



const routes: Routes = [
    {
        path: '',
        component: TodoListComponent
    },
    {
        path:'new-todo',
        component: SingleFormContainerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
