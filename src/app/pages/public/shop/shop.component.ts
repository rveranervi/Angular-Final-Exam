import { Component, OnInit } from '@angular/core';
import { ProductEntry } from 'src/app/interfaces/content/products';
import { ProductsService } from 'src/app/services/content/products.service';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  entries: ProductEntry[] = []
  showCharging: boolean = false
  showMore: boolean = true
  page: number = 1

  constructor(
    private SEOService: SeoService,
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.SEOService.updateTitle('Inicio | Sistema de io data perú');
    this.SEOService.updateDescription('Description del sitio para el sistema publicado. Description del sitio para el sistema publicado. Description del sitio para el sistema publicado. ');
    this.SEOService.updateRobot('index, follow')
    this.SEOService.updateKeywords('apps, otros')
    this.SEOService.updateAuthor('IO Data Perú')
    this.SEOService.updatePublisher('IO Data Perú')
    this.SEOService.createCanonicalLink()
    this.getListEntries()
  }

  getListEntries(){
    this.showCharging = true
    let size = 6 
    this.service.list(this.page, size).subscribe((response: ProductEntry[]) => {
      this.page += 1;
      this.entries.push(...response)
      this.showCharging = false
      if(response.length < size){
        this.showMore = false
      }
    }, (error) => {
      console.log("ERROR")
      this.showCharging = false
    })
  }

  getMoreEntries(){
    this.showCharging = true
    setTimeout(() => {this.getListEntries()}, 1000)
  }

}
