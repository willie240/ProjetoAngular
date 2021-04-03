import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarragiphyComponent } from './barragiphy/barragiphy.component';
import { ImagemsComponent } from './imagems/imagems.component';



const routes: Routes = [
  { path: '', component: BarragiphyComponent },
	{ path: 'Busqueda/:q', component: ImagemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
