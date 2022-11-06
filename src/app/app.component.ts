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
    this.service.getCountries().subscribe( (config: CountryConfig[]) => {
      this.domains = config
      let countries: string[] = this.domains.filter(d => { return d.uri == this.document.location.origin }).map( d => { return d.country })
      if(countries.length > 0){
        localStorage.setItem('country', countries[0])
      }
      else {
        //SET DEFAULT "PE"
        localStorage.setItem('country', 'PE')
      }
    })
  }

  loadLanguageDefault() {
    this.service.getLanguages(localStorage.getItem('country')!).subscribe( (config: LanguageConfig[]) => {
      if(localStorage.getItem('language') == null || localStorage.getItem('language') == undefined || 
      localStorage.getItem('language') == '' || !config.map(lan => {return lan.abrev}).includes(localStorage.getItem('language')!)) {
        this.document.documentElement.lang = config[0].abrev
        localStorage.setItem('language', config[0].abrev)
        this.translateService.setDefaultLang(config[0].abrev);
      }
      else {
        this.document.documentElement.lang = localStorage.getItem('language')!
        this.translateService.setDefaultLang(localStorage.getItem('language')!);
      }
    })
  }
}
