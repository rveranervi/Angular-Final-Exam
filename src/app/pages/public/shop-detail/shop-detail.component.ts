import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntry } from 'src/app/interfaces/content/products';
import { ProductsService } from 'src/app/services/content/products.service';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {

  entry: ProductEntry = <ProductEntry>{
    id: 0,
    nombre: '',
    marca: '',
    categoria: '',
    imagen: '',
    detalle: '',
    calificacion: 0
  };
  count = 1
  added: boolean = false

  constructor(
    private route: ActivatedRoute,
    private SEOService: SeoService,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductDetail()
  }

  getProductDetail() {
    this.route
    .paramMap
    .subscribe(params => {
      this.service.get(Number(params.get('id'))).subscribe((response: ProductEntry) => {
        this.entry = response
        this.added = (this.service.existProductInCart(this.entry.id));
      })
    })
  }

  aumentar() {
    this.count += 1;
  }

  disminuir() {
    this.count = this.count == 1 ? 1 : this.count-1;
  }

  agregar() {
    this.service.addToCart({product: this.entry.id, quantity: this.count})
    this.getProductDetail()
  }

}
