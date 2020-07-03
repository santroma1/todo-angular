import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgModel } from '@angular/forms';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [
    {
       path: '',
       redirectTo:'/login',
        pathMatch:'full'
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"login/:id",
        component:LoginComponent
    },
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"todolist",
        component:TodoListComponent,
        canActivate:[AuthGuard]
    },
    {
        path:"**",
        component:NotFoundPageComponent
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
