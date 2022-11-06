import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/user/auth-guard.service';

import { MainComponent as PublicComponent } from './pages/public/main/main.component';
import { MainComponent as PrivateComponent } from './pages/private/main/main.component';
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { BlogComponent } from './pages/public/blog/blog.component';
import { PricingComponent } from './pages/public/pricing/pricing.component';
import { FaqComponent } from './pages/public/faq/faq.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { RoleGuardService } from './services/user/role-guard.service';
import { ProfileComponent } from './pages/private/profile/profile.component';
import { TrainingComponent } from './pages/public/training/training.component';
import { StudentsComponent } from './pages/private/students/students.component';

const routes: Routes = [
  { path: '', component: PublicComponent, children: [
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
  },
  { path: 'panel', component: PrivateComponent, children:
    [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard] 
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [RoleGuardService], 
        data: { 
          expectedRole: 'admin'
        } 
      },
      {
        path: 'students',
        component: StudentsComponent,
        canActivate: [AuthGuard]
      },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
