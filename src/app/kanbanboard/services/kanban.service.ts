import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class KanbanService {
  private filterSubject = new BehaviorSubject<string>("");
  constructor() { }

  addSeachFilter(search: string){
    this.filterSubject.next(search);
  }

  getSeachSubject(): BehaviorSubject<string>{
    return this.filterSubject;
  }

}
