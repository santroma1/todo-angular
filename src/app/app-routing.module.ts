import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateSignupGuard } from './guards/can-deactivate-signup.guard';

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
        component:SignupComponent,
        canDeactivate: [CanDeactivateSignupGuard]
    },
    {   path: 'todolist',
        loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule),
        canLoad:[AuthGuard]
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
