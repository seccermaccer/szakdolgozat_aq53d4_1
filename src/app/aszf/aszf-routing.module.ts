import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AszfComponent } from './aszf.component';

const routes: Routes = [{ path: '', component: AszfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AszfRoutingModule { }
