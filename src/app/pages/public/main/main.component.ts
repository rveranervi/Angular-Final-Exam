import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CountriesConfigService } from 'src/app/services/util/countries-config.service';
import { CountryConfig, LanguageConfig } from 'src/app/interfaces/Util/countries-config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  countries: CountryConfig[] = []
  currentCountry: CountryConfig
  showCountries: boolean = false
  languages: LanguageConfig[] = []

  constructor(
    private serviceCountryConfig: CountriesConfigService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.currentCountry = {
      name: '',
      country: '',
      countryLabel: '',
      uri: ''
    }
  }

  ngOnInit(): void {
    this.document.body.setAttribute('class', '')
    this.document.body.classList.add('d-flex')
    this.document.body.classList.add('flex-column')
    this.document.body.classList.add('h-100')
    this.loadStyle('/assets/styles/style-public.css')
    this.loadCountryNav()
    this.loadLanguageFooter()
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

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];
    let themeLink = this.document.getElementById('client-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme'
      style.rel = 'stylesheet'
      style.href = `${styleName}`
      head.appendChild(style)
    }
  }

  loadCountryNav() {
    let country = localStorage.getItem('country')
    this.serviceCountryConfig.getCountries().subscribe( (config: CountryConfig[]) => {
      this.countries = config.filter(d => { return d.country != localStorage.getItem('country') })
      this.currentCountry = config.filter(d => { return d.country == country })[0]
      if(this.countries.length > 0 && this.currentCountry.country != ''){
        this.showCountries = true
      }
      else {
        this.showCountries = false
      }
    })
  }

  getCurrentCountry() {
    return this.currentCountry.countryLabel
  }

  loadLanguageFooter() {
    let current = this.document.documentElement.lang
    this.serviceCountryConfig.getLanguages(localStorage.getItem('country')!).subscribe( (config: LanguageConfig[]) => {
      this.languages = config.filter(lan => {return lan.abrev != current})
    })
  }

  changeLanguage(language: LanguageConfig) {
    this.document.documentElement.lang = language.abrev
    localStorage.setItem('language', language.abrev)
    window.location.reload()
  }

  getPhoneEnvironment() {
    return environment.phone
  }

  getAppNameEnvironment() {
    return environment.appName
  }

  getCompanyNameEnvironment() {
    return environment.company
  }

  getPhoneEnvironmentMessage() {
    return encodeURI('')
  }

}
