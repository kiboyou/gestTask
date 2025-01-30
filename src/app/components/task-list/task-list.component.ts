import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskPaginationComponent } from '../task-pagination/task-pagination.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, TaskPaginationComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
