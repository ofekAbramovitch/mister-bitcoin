import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { ContactResolver } from './services/contact.resolver';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { StatsComponent } from './pages/stats/stats.component';
import { SignupComponent } from './pages/signup/signup.component';
import { environment } from 'src/environments/environment.development';

const routes: Routes = [
  {
    path: 'contact/edit/:id', component: ContactEditComponent,
    resolve: { contact: ContactResolver }
  },
  { path: 'contact/edit', component: ContactEditComponent },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolver }
  },
  { path: 'contact', component: ContactIndexComponent, canActivate: [AuthGuard] },
  { path: 'stats', component: StatsComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment?.production})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
