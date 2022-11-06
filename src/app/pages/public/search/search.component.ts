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

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.service.getCart().map( item => {
      this.service.get(item.product).subscribe((response: ProductEntry) => {
        this.products.push(<ProductCart>{
          id: response.id,
          nombre: response.nombre,
          marca: response.marca,
          categoria: response.categoria,
          imagen: response.imagen,
          quantity: item.quantity
        })
      })
    })
  }

}
