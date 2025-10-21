import { Routes } from '@angular/router';
import { AufgabeaComponent } from './aufgaben/login/aufgabea.component';
import { AufgabebComponent } from './aufgaben/registrieren/aufgabeb.component';
import { AufgabecComponent } from './aufgaben/logout/aufgabec.component';
import { AufgabedComponent } from './aufgaben/friends/aufgabed.component';
import { AufgabeeComponent } from './aufgaben/chat/aufgabee.component';
import { AufgabefComponent } from './aufgaben/profileSettings/aufgabef.component';
import { AufgabegComponent } from './aufgaben/profile/aufgabeg.component';

export const routes: Routes = [
  { path: 'aufgabe-a', component: AufgabeaComponent },
  { path: 'aufgabe-b', component: AufgabebComponent },
  { path: 'aufgabe-c', component: AufgabecComponent },
  { path: 'aufgabe-d', component: AufgabedComponent },
  { path: 'aufgabe-e', component: AufgabeeComponent },
  { path: 'aufgabe-f', component: AufgabefComponent },
  { path: 'aufgabe-g', component: AufgabegComponent },
];
