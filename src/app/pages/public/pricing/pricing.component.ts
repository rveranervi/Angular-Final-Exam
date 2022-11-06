import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/util/seo.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(
    private SEOService: SeoService,
    private router: Router
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
