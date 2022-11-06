import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/public/main/main.component';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { MoviesComponent } from './pages/public/movies/movies.component';
import { ShopComponent } from './pages/public/shop/shop.component';
import { SearchComponent } from './pages/public/search/search.component';
import { ShopDetailComponent } from './pages/public/shop-detail/shop-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'movies',
      component: MoviesComponent,
    },
    {
      path: 'shop',
      component: ShopComponent,
    },
    {
      path: 'shop/detail/:id',
      component: ShopDetailComponent,
    },
    {
      path: 'cart',
      component: SearchComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
