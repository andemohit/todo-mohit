import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: string[] = [];
  private taskSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.tasks);

  /**
   * Add a task to the list of tasks
   * @param {string} task The task to add
   */
  addTask(task: string): void {
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }

  /**
   * Get the list of tasks
   * @returns An observable of the list of tasks
   */
  getTasks(): Observable<string[]> {
    return this.taskSubject.asObservable();
  }

  /**
   * Delete a task from the list of tasks
   * @param {string} task The task to delete
   */
  deleteTask(task: string): void {
    this.tasks = this.tasks.filter((t) => t !== task);
    this.taskSubject.next(this.tasks);
  }
}
