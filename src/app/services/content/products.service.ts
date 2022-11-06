import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductEntry } from 'src/app/interfaces/content/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(limit: number, init: number): Observable<ProductEntry[]> {
    return this.httpClient.get<ProductEntry[]>(environment.apiUrl + '/products');
  }

}
