import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { KanbanService } from '../services/kanban.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit,OnDestroy {
  @Output('hideFilter') hideFilter = new EventEmitter();
  @Output('searchFilter') searchFilter = new EventEmitter();
  search: FormControl;
  form: FormGroup;
  subscr:Subscription;
  searchSub: Subscription = new Subscription();
  constructor(private service: KanbanService) {
    this.search = new FormControl("");
    this.form = new FormGroup({
      search: this.search
    });

    this.subscr = this.search.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(res => {
      this.searchFilter.emit(res);
      this.service.addSeachFilter(res);
    });
  }

  ngOnInit(): void {
    this.searchSub = this.service.getSeachSubject().subscribe(res => {
      this.search.setValue(res);
    });
  }


  close(){
    this.hideFilter.emit("");
  }
  ngOnDestroy(): void {
    this.subscr.unsubscribe();
    this.searchSub.unsubscribe()
  }
}
