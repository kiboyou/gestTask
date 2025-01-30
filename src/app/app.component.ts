import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskHeaderComponent } from './components/task-header/task-header.component';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  imports: [TaskListComponent, TaskHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
