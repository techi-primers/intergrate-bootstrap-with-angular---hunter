import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { HeadHunterManageComponent } from './head-hunter-manage/head-hunter-manage.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ViewHeadhunterComponent} from './view-headhunter/view-headhunter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
const routes:Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  { path:'about',
    component:AboutComponent
  },
  { path:'contact',
    component:ContactComponent
  },
  {
    path:'sidebar',
    component: SidebarComponent,

    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'app-view-head-hunter',component:ViewHeadhunterComponent},
      {path:'app-recruitment',component:RecruitmentComponent}
    ]
  }


]
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    RecruitmentComponent,
    HeadHunterManageComponent,
    AboutComponent,
    HomeComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
