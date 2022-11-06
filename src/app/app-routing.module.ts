import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/public/main/main.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import { BlogComponent } from './pages/public/blog/blog.component';
import { PricingComponent } from './pages/public/pricing/pricing.component';
import { FaqComponent } from './pages/public/faq/faq.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { TrainingComponent } from './pages/public/training/training.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    {
      path: '',
      component: HomeComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'blog',
      component: BlogComponent,
    },
    {
      path: 'training',
      component: TrainingComponent,
    },
    {
      path: 'pricing',
      component: PricingComponent,
    },
    {
      path: 'faq',
      component: FaqComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
