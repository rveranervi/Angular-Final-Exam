import { Component, OnInit } from '@angular/core';
import { ItemCart, ProductCart } from 'src/app/interfaces/content/cart-items';
import { ProductEntry } from 'src/app/interfaces/content/products';
import { ProductsService } from 'src/app/services/content/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: ProductCart[] = []
  total: number = 0
  searching: string = ''

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.loadCart()
  }

  loadCart(){
    this.service.getCart().map( item => {
      this.service.get(item.product).subscribe((response: ProductEntry) => {
        this.products.push(<ProductCart>{
          id: response.id,
          nombre: response.nombre,
          marca: response.marca,
          categoria: response.categoria,
          imagen: response.imagen,
          precio: response.precio,
          quantity: item.quantity
        })
        this.total += (item.quantity * response.precio)
      })
    })
  }

  delete(code: number){
    this.service.deleteToCart(code)
    this.products = []
    this.total = 0
    this.searching = ''
    this.loadCart()
  }

  isLogged() {
    if(
      localStorage.getItem('displayName') == null || 
      localStorage.getItem('token') == null
    ) {
      return false
    }
    else {
      return true
    }
  }

  pagar() {
    this.clear()
  }

  clear() {
    this.service.clearCart()
    this.products = []
    this.total = 0
    this.loadCart()
  }

  getUsername() {
    return localStorage.getItem('displayName')
  }

}
