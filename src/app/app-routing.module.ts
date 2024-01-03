import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{ path:'', redirectTo:'/home' ,pathMatch:'full'},
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'works', component: WorksComponent },
{ path: 'blogs', component: BlogsComponent },
{ path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
