import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ForShowTable} from './models/for-show-table.enum';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      content: ForShowTable.MAIN
    }
  },
  {
    path: 'search',
    component: MainComponent,
    data: {
      content: ForShowTable.SEARCH
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
