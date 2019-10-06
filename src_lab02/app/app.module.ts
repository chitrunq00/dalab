import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DssinhvienComponent } from './dssinhvien/dssinhvien.component';
import { ThongtinsvComponent } from './thongtinsv/thongtinsv.component';

@NgModule({
  declarations: [
    AppComponent,
    DssinhvienComponent,
    ThongtinsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([ 
      { path: '', 	component: DssinhvienComponent },
      {path: 'thongtin', component:ThongtinsvComponent},
      { path: 'dssinhvien/:ID', component: ThongtinsvComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
