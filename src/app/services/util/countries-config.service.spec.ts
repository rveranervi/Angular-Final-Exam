import { TestBed } from '@angular/core/testing';

import { CountriesConfigService } from './countries-config.service';

describe('CountriesConfigService', () => {
  let service: CountriesConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
