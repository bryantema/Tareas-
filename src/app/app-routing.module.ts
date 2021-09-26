import { TmplAstBoundAttribute } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DetalleCarrosComponent } from './pages/detalle-carros/detalle-carros.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: 'home', component: PortafolioComponent},

  { path: 'item', component: ItemComponent },
  { path:'about', component:AboutComponent},
  { path:'productos', component: ProductosComponent},
  { path: 'detalle-carros/:ID', component: DetalleCarrosComponent},
  { path: "**", pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
