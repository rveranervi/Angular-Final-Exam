import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LoginAuth } from 'src/app/interfaces/auth/login-auth';
import { RegisterAuth } from 'src/app/interfaces/auth/register-auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(form: FormGroup): Observable<LoginAuth> {
    return this.httpClient.post<RegisterAuth>(environment.apiUrl + '/school/school/login',
    { 
      email: form.get('email')?.value || '',
      password: form.get('password')?.value || ''
    });
  }

  register(form: FormGroup): Observable<RegisterAuth> {
    return this.httpClient.post<RegisterAuth>(environment.apiUrl + '/school/school/register',
    { 
      documentNumber: '20121010103332',
      documentType: 'RUC',
      businessName: form.get('businessName')?.value || '',
      commercialName: form.get('commercialName')?.value || '',
      address: 'La Molina',
      language: 'es',
      slug: 'trilce-la-molina',
      email: form.get('email')?.value || '',
      password: form.get('password')?.value || ''
    });
  }
}
