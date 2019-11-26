import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangGioiThieuComponent } from './trang-gioi-thieu/trang-gioi-thieu.component';
import { TrangLienheComponent } from './trang-lienhe/trang-lienhe.component';
import { TrangGopyComponent } from './trang-gopy/trang-gopy.component';
import { TrangHoidapComponent } from './trang-hoidap/trang-hoidap.component';
import { TrangDangnhapComponent } from './trang-dangnhap/trang-dangnhap.component';
import { TrangDangkyComponent } from './trang-dangky/trang-dangky.component';
import { TrangDoimatkhauComponent } from './trang-doimatkhau/trang-doimatkhau.component';
import { TrangSuadoitaikhoanComponent } from './trang-suadoitaikhoan/trang-suadoitaikhoan.component';
import { TrangDanhmucmonhocComponent } from './trang-danhmucmonhoc/trang-danhmucmonhoc.component';
import { TrangThitracnghienComponent } from './trang-thitracnghien/trang-thitracnghien.component';
import { TrangQuenmatkhauComponent } from './trang-quenmatkhau/trang-quenmatkhau.component';



@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    TrangGioiThieuComponent,
    TrangLienheComponent,
    TrangGopyComponent,
    TrangHoidapComponent,
    TrangDangnhapComponent,
    TrangDangkyComponent,
    TrangDoimatkhauComponent,
    TrangSuadoitaikhoanComponent,
    TrangDanhmucmonhocComponent,
    TrangThitracnghienComponent,
    TrangQuenmatkhauComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TrangChuComponent },
      { path: 'gioithieu', component: TrangGioiThieuComponent },
      { path: 'dangky', component: TrangDangkyComponent },
      { path: 'quenmatkhau', component: TrangQuenmatkhauComponent },
      { path: 'dangnhap', component: TrangDangnhapComponent },
      { path: 'doimatkhau', component: TrangDoimatkhauComponent },
      { path: 'capnhattaikhoai', component: TrangSuadoitaikhoanComponent },
      { path: 'lienhe', component: TrangLienheComponent },
      { path: 'gopy', component:TrangGopyComponent },
      { path: 'hoidap', component:TrangHoidapComponent },
      { path: 'traloicauhoi/:mid', component:TrangThitracnghienComponent },
      

      // { path: 'list-product/:productId', component: ProductdetailComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
