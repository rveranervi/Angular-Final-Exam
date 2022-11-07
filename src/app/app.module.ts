import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './pages/public/login/login.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MoviesComponent } from './pages/public/movies/movies.component';
import { ShopComponent } from './pages/public/shop/shop.component';
import { SearchComponent } from './pages/public/search/search.component';
import { ShopDetailComponent } from './pages/public/shop-detail/shop-detail.component';
import { registerLocaleData } from '@angular/common';
import LocaleEsPe from "@angular/common/locales/es-PE";
import { SearchingPipe } from './pipes/searching.pipe';


export function createTranslateLoader(http: HttpClient) {
  TranslateHttpLoader
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

registerLocaleData(LocaleEsPe);

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomeComponent,
    LoginComponent,
    MoviesComponent,
    ShopComponent,
    SearchComponent,
    ShopDetailComponent,
    SearchingPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    FormsModule,
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
  providers: [{ provide: LOCALE_ID, useValue: "es-PE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
