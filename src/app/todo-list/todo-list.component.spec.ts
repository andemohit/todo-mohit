import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { of, BehaviorSubject } from 'rxjs';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let mockTodoService: jasmine.SpyObj<TodoService>;

  beforeEach(() => {
    mockTodoService = jasmine.createSpyObj<TodoService>('TodoService', [
      'addTask',
      'getTasks',
      'deleteTask',
    ]);

    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: TodoService, useValue: mockTodoService }],
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as Todo List', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.card-title')?.textContent).toContain(
      'Todo List'
    );
  });

  it('should initilialize todos with the list of tasks in the service', () => {
    const mockTodos = ['Task 01', 'Task 02'];
    mockTodoService.getTasks.and.returnValue(of(mockTodos));
    fixture.detectChanges();

    expect(component.tasks).toEqual(mockTodos);
  });

  it('should subscribe to the list of tasks', () => {
    const mockTasks = ['Buy Milk', 'Buy Eggs'];
    mockTodoService.getTasks.and.returnValue(of(mockTasks));
    fixture.detectChanges();

    expect(component.tasks).toEqual(mockTasks);
  });

  it('should add a task and reset the form on onSubmit', () => {
    const taskToAdd = 'New Task';
    component.todoForm = new FormGroup({
      task: new FormControl(),
    });
    component.todoForm.get('task')?.setValue(taskToAdd);

    component.onSubmit();

    expect(mockTodoService.addTask).toHaveBeenCalledWith(taskToAdd);
    expect(component.todoForm.get('task')?.value).toEqual('');
  });

  it('should delete a task', () => {
    const taskToDelete = 'Buy Milk';
    component.deleteTodoTask(taskToDelete);

    expect(mockTodoService.deleteTask).toHaveBeenCalledWith(taskToDelete);
  });
});
