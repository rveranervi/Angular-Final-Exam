import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogEntry } from 'src/app/interfaces/ContentPublic/blog-entry';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(limit: number, init: number): Observable<BlogEntry[]> {
    //let email: any = form.get('email')?.value || '';
    //let password: any = form.get('password')?.value || '';
    //return this.httpClient.get<LoginAuth>('/api/todo');
    return of<BlogEntry[]>([
      <BlogEntry>{
        id: 0,
        slug: 'titulo-nuevo-test',
        title: 'Noticia de inicio esta es una prueba',
        label: 'Educación',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        resume: 'Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una pruebaNoticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba'
      },
      <BlogEntry>{
        id: 0,
        slug: 'titulo-nuevo-test',
        title: 'Noticia de inicio esta es una prueba',
        label: 'Educación',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        resume: 'Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una pruebaNoticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba'
      },
      <BlogEntry>{
        id: 0,
        slug: 'titulo-nuevo-test',
        title: 'Noticia de inicio esta es una prueba',
        label: 'Educación',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        resume: 'Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una pruebaNoticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba'
      },
      <BlogEntry>{
        id: 0,
        slug: 'titulo-nuevo-test',
        title: 'Noticia de inicio esta es una prueba',
        label: 'Educación',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        resume: 'Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una pruebaNoticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba'
      },
      <BlogEntry>{
        id: 0,
        slug: 'titulo-nuevo-test',
        title: 'Noticia de inicio esta es una prueba',
        label: 'Educación',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        resume: 'Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una pruebaNoticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba'
      },
      <BlogEntry>{
        id: 0,
        slug: 'titulo-nuevo-test',
        title: 'Noticia de inicio esta es una prueba',
        label: 'Educación',
        image: 'https://dummyimage.com/700x350/343a40/6c757d',
        resume: 'Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una pruebaNoticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba. Noticia de inicio esta es una prueba'
      }
    ]);
  }
}
