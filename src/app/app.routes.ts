import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyskillComponent } from './myskill/myskill.component';
import { ExploreComponent } from './explore/explore.component';
import { WalletComponent } from './wallet/wallet.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'my-skill',
    component: MyskillComponent,
  },
  {
    path: 'explore',
    component: ExploreComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
