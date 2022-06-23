import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanboardRoutingModule } from './kanbanboard-routing.module';
import { KanbanComponent } from './kanban/kanban.component';
import { SharedModule } from '../shared/shared.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KanbanService } from './services/kanban.service';

@NgModule({
  declarations: [
    KanbanComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    KanbanboardRoutingModule,
    SharedModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [KanbanService]
})
export class KanbanboardModule { }
