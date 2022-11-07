import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginAuth } from 'src/app/interfaces/auth/login-auth';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(
    private messageService: MessageService,
    private service: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('lamolina@trilce.edu.pe', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('abc123', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  login(){
    this.service.login(this.loginForm!).subscribe((response: LoginAuth[]) => {
      if(response.length > 0) {
        localStorage.setItem('displayName', (response[0].displayName || ''))
        localStorage.setItem('token', (response[0].token || ''))
        this.messageService.add({severity:'success', summary: 'Correcto', detail:'Inicio sesión correctamente.'});
      }
      else {
        this.messageService.add({severity:'error', summary: 'Ocurrio un error', detail: "No se encontró el usuario"});
      }
    },
    (error: HttpErrorResponse) => {
      this.messageService.add({severity:'error', summary: 'Ocurrio un error', detail: error.error});
    });
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

}
