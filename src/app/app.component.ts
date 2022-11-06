import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { CountryConfig, LanguageConfig } from './interfaces/Util/countries-config';
import { CountriesConfigService } from './services/util/countries-config.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private domains: CountryConfig[] = [];

  constructor(
    private service: CountriesConfigService,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ){ }

  ngOnInit(): void {
    this.loadCountriesConfig()
    this.loadLanguageDefault()
  }

  loadCountriesConfig() {
    if(!localStorage.getItem('country')){
      localStorage.setItem('country', 'PE')
    }
  }

  loadLanguageDefault() {
    if(!localStorage.getItem('language')){
      localStorage.setItem('language', 'es')
    }
    this.document.documentElement.lang = localStorage.getItem('language')!
    this.translateService.setDefaultLang(localStorage.getItem('language')!);
  }
}
