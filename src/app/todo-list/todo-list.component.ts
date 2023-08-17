import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  /** The list of tasks */
  tasks: string[] = [];

  /** The form to add a task */
  todoForm: FormGroup = new FormGroup({
    task: new FormControl('', Validators.required),
  });

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // Subscribe to the list of tasks
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

  /** Add a task to the list of tasks */
  onSubmit(): void {
    // Add the task to the list of tasks
    this.todoService.addTask(this.todoForm.controls['task'].value);

    // Reset the form
    this.todoForm.controls['task'].setValue('');
  }

  deleteTodoTask(task: string): void {
    this.todoService.deleteTask(task);
  }
}
