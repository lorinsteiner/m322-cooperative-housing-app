import { Routes } from '@angular/router';
import {Communication} from './communication/communication';
import {Start} from './start/start';
import {Market} from './market/market';
import {Rooms} from './rooms/rooms';
import {Profil} from './profil/profil';

export const routes: Routes = [
  { path: 'start', component: Start},
  { path: 'market', component: Market },
  { path: 'communication', component: Communication },
  { path: 'rooms', component: Rooms },
  { path: 'profile', component: Profil },
];
