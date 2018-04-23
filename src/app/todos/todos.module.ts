import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, CanActivate } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { TodoComponent, TodoItemComponent } from './components/todo';
import { HomeComponent } from './containers/home/home.component';
import { reducers } from '../todos/reducers';
import { SharedModule } from '../shared';
import { TodoEffects } from './effects';
import { AuthGuardService } from '../todos/services';

const todoRoutes: Routes = [
  {
		path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
	},
	{
		path: 'todo',
    component: TodoComponent,
    children: [
      {
        path: ':id',
        component: TodoItemComponent
      }
    ]
	}
];

@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(todoRoutes),
    StoreModule.forFeature('todos', reducers),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [AuthGuardService]
})
export class TodosModule { }
