import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './Components/component-a/component-a.component';
import { ComponentBComponent } from './Components/component-b/component-b.component';

const routes: Routes = [
  {path: '', component:ComponentAComponent},
  {path: 'b', component:ComponentBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
