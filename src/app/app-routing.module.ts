import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {TeenusedComponent} from "./teenused/teenused.component";
import {TootajadComponent} from "./tootajad/tootajad.component";
import {SalongistComponent} from "./salongist/salongist.component";


const routes: Routes = [
  {path: '', component:MainComponent},
  {path:'teenused', component:TeenusedComponent},
  {path:'tootajad', component:TootajadComponent},
  {path:'salongist', component:SalongistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
