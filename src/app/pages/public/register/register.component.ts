import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { RegisterAuth } from 'src/app/interfaces/auth/register-auth';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup

  constructor(
    private messageService: MessageService,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      businessName: new FormControl('Colegios Peruanos SAC', [
        Validators.required,
        Validators.minLength(4)
      ]),
      commercialName: new FormControl('Trilce La Molina', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('lamolina@trilce.edu.pe', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('abc123', [
        Validators.required,
        Validators.minLength(4)
      ]),
      repassword: new FormControl('abc123', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  register(){
    this.service.register(this.registerForm!).subscribe((response: RegisterAuth) => {
      localStorage.setItem('displayName', (response.displayName || ''))
      localStorage.setItem('token', (response.token || ''))
      this.messageService.add({severity:'success', summary: 'Correcto', detail:'Se registró correctamente.'});
      this.router.navigate(['/panel'])
    },
    (error: HttpErrorResponse) => {
      this.messageService.add({severity:'error', summary: 'Ocurrio un error', detail: error.error});
    });
  }

}
