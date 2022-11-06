import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LoginAuth } from 'src/app/interfaces/auth/login-auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(form: FormGroup): Observable<LoginAuth> {
    /*return this.httpClient.post<LoginAuth>(environment.apiUrl + '/school/school/login',
    { 
      email: form.get('email')?.value || '',
      password: form.get('password')?.value || ''
    });*/
    return of(<LoginAuth>{
      displayName: "Ricardo Vera",
      token: "dkdksksdksjkjdksjksdjd"
    })
  }
}
