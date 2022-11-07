import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemCart } from 'src/app/interfaces/content/cart-items';
import { ProductEntry } from 'src/app/interfaces/content/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  items: ItemCart[] = [];

  constructor(
    private httpClient: HttpClient
  ) {
    
  }

  list(init: number, limit: number): Observable<ProductEntry[]> {
    return this.httpClient.get<ProductEntry[]>(environment.apiUrl + '/products', {params: {"_page": init, "_limit": limit}});
  }

  get(code: number): Observable<ProductEntry> {
    return this.httpClient.get<ProductEntry>(environment.apiUrl + '/products/' + code);
  }

  getCart() {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '[]') ?? []
    return this.items
  }

  addToCart(item: ItemCart) {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '[]') ?? []
    if(this.items.filter(e => {return e.product==item.product}).length == 0){
      this.items.push(item)
      localStorage.setItem('cart_items', JSON.stringify(this.items)); 
    }
  }

  deleteToCart(itemID: number) {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '[]') ?? []
    this.items = this.items.filter(e => {return e.product!=itemID})
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }

  clearCart() {
    this.items = []
    localStorage.setItem('cart_items', JSON.stringify(this.items)); 
  }

  existProductInCart(productID: number) {
    this.items = JSON.parse(localStorage.getItem("cart_items") || '[]') ?? []
    return (this.items.filter(e => {return e.product==productID}).length > 0)
  }

}
