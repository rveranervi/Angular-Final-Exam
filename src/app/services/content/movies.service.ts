import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieEntry, MovieRequest } from 'src/app/interfaces/content/movies';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(init: number, limit: number): Observable<MovieEntry[]> {
    return this.httpClient.get<MovieEntry[]>(environment.apiUrl + '/movies', {params: {"_page": init, "_limit": limit}});
  }

  remove(code: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/movies/' + code);
  }

  insert(request: MovieRequest): Observable<MovieEntry> {
    return this.httpClient.post<MovieEntry>(environment.apiUrl + '/movies', request);
  }

}
