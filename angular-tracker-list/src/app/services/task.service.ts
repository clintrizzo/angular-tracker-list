import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
//rxjs library for the observable and of
import {Task} from '../Task'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    //add observable here and surround observable with arrow brackets
    return this.http.get<Task[]>(this.apiUrl)
    //for observables to work we need to define it 
  }
}
