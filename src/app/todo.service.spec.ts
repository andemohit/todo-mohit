import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    todoService = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(todoService).toBeTruthy();
  });

  it('should add a task', () => {
    const task = "Buy Milk";
    todoService.addTask(task);
    todoService.getTasks().subscribe((tasks) => {
      expect(tasks).toContain(task);
    });
  });

  it('should delete a task', () => {
    const initialTasks = ["Buy Milk", "Buy Eggs"];
    initialTasks.forEach((task) => todoService.addTask(task));

    const taskToDelete = "Buy Milk";
    todoService.deleteTask(taskToDelete);
    todoService.getTasks().subscribe((tasks) => {
      expect(tasks).not.toContain(taskToDelete);
    });
  });
});
