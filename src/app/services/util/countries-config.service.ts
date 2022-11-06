import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryConfig, CurrencyConfig, LanguageConfig } from 'src/app/interfaces/Util/countries-config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesConfigService {

  constructor() { }

  getCountries(): Observable<CountryConfig[]> {
    if(!environment.production) {
      return of<CountryConfig[]>([
        {
          name: 'localdev',
          uri: 'http://localhost:4200',
          country: 'PE',
          countryLabel: 'Localhost'
        },
        {
          name: 'localprod',
          uri: 'http://angdev.test',
          country: 'PE',
          countryLabel: 'Perú DEFAULT'
        },
        {
          name: 'perulocal',
          uri: 'http://pe.angdev.test',
          country: 'PE',
          countryLabel: 'Perú'
        },
        {
          name: 'colombialocal',
          uri: 'http://co.angdev.test',
          country: 'CO',
          countryLabel: 'Colombia'
        },
        {
          name: 'ecuadorlocal',
          uri: 'http://ec.angdev.test',
          country: 'EC',
          countryLabel: 'Ecuador'
        }
      ]);
    }
    else {
      return of<CountryConfig[]>([
        {
          name: 'perulocal',
          uri: 'http://pe.angdev.test',
          country: 'PE',
          countryLabel: 'Perú'
        },
        {
          name: 'colombialocal',
          uri: 'http://co.angdev.test',
          country: 'CO',
          countryLabel: 'Colombia'
        },
        {
          name: 'ecuadorlocal',
          uri: 'http://ec.angdev.test',
          country: 'EC',
          countryLabel: 'Ecuador'
        }
      ]);
    }
  }

  getLanguages(country: string): Observable<LanguageConfig[]> {
    if(!environment.production) {
      let paises = [
        {
          country: 'PE',
          languages: <LanguageConfig[]>[
            {
              name: 'Español',
              label: 'ES',
              abrev: 'es'
            },
            {
              name: 'Inglés',
              label: 'EN',
              abrev: 'en'
            },
            {
              name: 'Italiano',
              label: 'IT',
              abrev: 'it'
            }
          ]
        },
        {
          country: 'CO',
          languages: <LanguageConfig[]>[
            {
              name: 'Español',
              label: 'ES',
              abrev: 'es'
            },
            {
              name: 'Inglés',
              label: 'EN',
              abrev: 'en'
            }
          ]
        },
        {
          country: 'EC',
          languages: <LanguageConfig[]>[
            {
              name: 'Español',
              label: 'ES',
              abrev: 'es'
            },
            {
              name: 'Inglés',
              label: 'EN',
              abrev: 'en'
            }
          ]
        }
      ];
      return of(paises.filter(lan => {return lan.country == country}).map(lan => {return lan.languages})[0]);
    }
    else {
      return of([
        {
          country: 'PE',
          languages: <LanguageConfig[]>[
            {
              name: 'Español',
              label: 'ES',
              abrev: 'es'
            },
            {
              name: 'Inglés',
              label: 'EN',
              abrev: 'en'
            },
            {
              name: 'Italiano',
              label: 'IT',
              abrev: 'it'
            }
          ]
        },
        {
          country: 'CO',
          languages: <LanguageConfig[]>[
            {
              name: 'Español',
              label: 'ES',
              abrev: 'es'
            },
            {
              name: 'Inglés',
              label: 'EN',
              abrev: 'en'
            }
          ]
        },
        {
          country: 'EC',
          languages: <LanguageConfig[]>[
            {
              name: 'Inglés',
              label: 'EN',
              abrev: 'en'
            },
            {
              name: 'Español',
              label: 'ES',
              abrev: 'es'
            }
          ]
        }
      ].filter(lan => {return lan.country == country}).map(lan => {return lan.languages})[0]);
    }
  }

  getCurrencies(country: string): Observable<CurrencyConfig[]> {
    if(!environment.production) {
      return of([
        {
          country: 'PE',
          currencies: <CurrencyConfig[]>[
            {
              name: 'Nuevo Sol Peruano',
              label: 'PEN',
              symbol: 'S/.'
            },
            {
              name: 'Dólar estadounidense',
              label: 'USD',
              symbol: '$'
            },
            {
              name: 'Euro',
              label: 'EUR',
              symbol: '€'
            }
          ]
        },
        {
          country: 'CO',
          currencies: <CurrencyConfig[]>[
            {
              name: 'Peso Colobiano',
              label: 'COP',
              symbol: '$'
            },
            {
              name: 'Dólar estadounidense',
              label: 'USD',
              symbol: '$'
            },
            {
              name: 'Euro',
              label: 'EUR',
              symbol: '€'
            }
          ]
        },
        {
          country: 'EC',
          currencies: <CurrencyConfig[]>[
            {
              name: 'Dólar estadounidense',
              label: 'USD',
              symbol: '$'
            },
            {
              name: 'Euro',
              label: 'EUR',
              symbol: '€'
            }
          ]
        }
      ].filter(cu => {return cu.country == country}).map(cu => {return cu.currencies})[0]);
    }
    else {
      return of([
        {
          country: 'PE',
          currencies: <CurrencyConfig[]>[
            {
              name: 'Nuevo Sol Peruano',
              label: 'PEN',
              symbol: 'S/.'
            },
            {
              name: 'Dólar estadounidense',
              label: 'USD',
              symbol: '$'
            },
            {
              name: 'Euro',
              label: 'EUR',
              symbol: '€'
            }
          ]
        },
        {
          country: 'CO',
          currencies: <CurrencyConfig[]>[
            {
              name: 'Peso Colobiano',
              label: 'COP',
              symbol: '$'
            },
            {
              name: 'Dólar estadounidense',
              label: 'USD',
              symbol: '$'
            },
            {
              name: 'Euro',
              label: 'EUR',
              symbol: '€'
            }
          ]
        },
        {
          country: 'EC',
          currencies: <CurrencyConfig[]>[
            {
              name: 'Dólar estadounidense',
              label: 'USD',
              symbol: '$'
            },
            {
              name: 'Euro',
              label: 'EUR',
              symbol: '€'
            }
          ]
        }
      ].filter(cu => {return cu.country == country}).map(cu => {return cu.currencies})[0]);
    }
  }
}
