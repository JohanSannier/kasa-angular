import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutComponent } from './pages/about/about.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  { path: 'appartment/:id', component: CardDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
