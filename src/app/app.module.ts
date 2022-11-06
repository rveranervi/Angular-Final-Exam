import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppComponent } from './app.component';
import { MainComponent as PublicComponent } from './pages/public/main/main.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import { PricingComponent } from './pages/public/pricing/pricing.component';
import { FaqComponent } from './pages/public/faq/faq.component';
import { BlogComponent } from './pages/public/blog/blog.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { MainComponent as PrivateComponent } from './pages/private/main/main.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { ProfileComponent } from './pages/private/profile/profile.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TrainingComponent } from './pages/public/training/training.component';
import { StudentsComponent } from './pages/private/students/students.component';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

export function createTranslateLoader(http: HttpClient) {
  TranslateHttpLoader
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomeComponent,
    AboutComponent,
    PricingComponent,
    FaqComponent,
    BlogComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PrivateComponent,
    ProfileComponent,
    TrainingComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com","localhost"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    FileUploadModule,
    RatingModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
