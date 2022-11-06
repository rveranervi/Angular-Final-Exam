import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private SEOService: SeoService
  ) { }

  ngOnInit(): void {
    this.SEOService.updateTitle('Inicio | Sistema de io data perú');
    this.SEOService.updateDescription('Description del sitio para el sistema publicado. Description del sitio para el sistema publicado. Description del sitio para el sistema publicado. ');
    this.SEOService.updateRobot('index, follow')
    this.SEOService.updateKeywords('apps, otros')
    this.SEOService.updateAuthor('IO Data Perú')
    this.SEOService.updatePublisher('IO Data Perú')
    this.SEOService.createCanonicalLink()
  }

}
