import { CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { KanbanCardItem } from '../models/kanban-card';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  todoList: KanbanCardItem[] = [];
  developmentList:KanbanCardItem[] = [];
  testingList: KanbanCardItem[] = [];
  completedList: KanbanCardItem[] = [];
  showFilter: boolean = false;
  searchString:string="";
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  add(){
    this.todoList.push({name: `Task ${this.todoList.length+1}`, comments: 0});
    this.todoList = this.todoList;
  }

  hideFilter($event: any){
    this.showFilter = false;
  }

  searchFilter(event: any){
    this.searchString = event;
    // this.developmentList = this.developmentList.filter()
  }

}
