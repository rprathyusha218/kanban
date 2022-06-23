import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'kanban-board', 
    loadChildren: () => import('./kanbanboard/kanbanboard.module').then(e => e.KanbanboardModule)
  },
  {
    path: "",
    redirectTo: 'kanban-board',
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
