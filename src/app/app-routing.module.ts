import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from 'src/app/countries/countries.component';
import { RouteResolver } from 'src/app/countries/countries.resolve';
import { CountryInDetailComponent } from 'src/app/country-in-detail/country-in-detail.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MapsComponent } from 'src/app/maps/maps.component';
import { MutualfundsComponent } from 'src/app/mutualfunds/mutualfunds.component';
import { MatrixComponent } from 'src/app/matrix/matrix.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'funds',
    component: MutualfundsComponent
  },
  {
    path: 'fundsGraph/:code',
    component: MapsComponent
  },
  {
    path: 'grid',
    component: MatrixComponent
  },
  {
    path: 'countries',
    component: CountriesComponent,
    resolve: { RouteResolver }
  },
  {
    path: 'countrydetail/:countryName',
    component: CountryInDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteResolver]
})
export class AppRoutingModule { }
