import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrainingEntry } from 'src/app/interfaces/ContentPublic/training-entry';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(limit: number, init: number): Observable<TrainingEntry[]> {
    //let email: any = form.get('email')?.value || '';
    //let password: any = form.get('password')?.value || '';
    //return this.httpClient.get<LoginAuth>('/api/todo');
    return of<TrainingEntry[]>([
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      },
      <TrainingEntry>{
        id: 0,
        title: 'Iniciando sesión como alumno',
        label: 'Alumnos',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        video: 'https://www.youtube.com/watch?v=fp16a7IhxI0'
      }
    ]);
  }
}
