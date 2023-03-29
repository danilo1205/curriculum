import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbillitiesComponent } from './component/infos/abillities/abillities.component';
import { ContactComponent } from './component/infos/contact/contact.component';
import { PersonalComponent } from './component/infos/personal/personal.component';
import { WhoComponent } from './component/infos/who/who.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'cabecalho',
    pathMatch: 'full'
  },
  {
    path: 'who',
    component: WhoComponent
  },
  {
    path: 'abillities',
    component: AbillitiesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
