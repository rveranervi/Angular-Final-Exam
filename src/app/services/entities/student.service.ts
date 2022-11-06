import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interfaces/User/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(environment.apiUrl + '/school/student/list');
  }
}
