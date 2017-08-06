import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {ProductService} from './service/product.service';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {ProductComponent} from './components/product/list/product.component';
import {EditProductComponent} from './components/product/edit/edit-product.component';
import {FormsModule} from '@angular/forms';
import {TypeComponent} from './components/type/list/type.component';
import {TypeService} from './service/type.service';
import {EditTypeComponent} from './components/type/edit/edit-type.component';
import {SlideComponent} from './components/slide/list/slide.component';
import {SlideService} from './service/slide.service';
import {EditSlideComponent} from './components/slide/edit/edit-slide.component';
import {BrandComponent} from './components/brand/list/brand.component';
import {EditBrandComponent} from './components/brand/edit/edit-brand.component';
import {BrandService} from './service/brand.service';
import {AuthService} from './service/auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthGuard} from './guard/auth.guard';
import {ExceptionService} from './service/exception.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'types', component: TypeComponent, canActivate: [AuthGuard]},
  {path: 'slides', component: SlideComponent, canActivate: [AuthGuard]},
  {path: 'brands', component: BrandComponent, canActivate: [AuthGuard]},
  {path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  {path: 'edit-type/:id', component: EditTypeComponent, canActivate: [AuthGuard]},
  {path: 'edit-slide/:id', component: EditSlideComponent, canActivate: [AuthGuard]},
  {path: 'add-product', component: EditProductComponent, canActivate: [AuthGuard]},
  {path: 'add-type', component: EditTypeComponent, canActivate: [AuthGuard]},
  {path: 'add-slide', component: EditSlideComponent, canActivate: [AuthGuard]},
  {path: 'add-brand', component: EditBrandComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    EditBrandComponent,
    EditProductComponent,
    EditSlideComponent,
    EditTypeComponent,
    HomeComponent,
    MenuComponent,
    ProductComponent,
    SlideComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuard,
    AuthService,
    BrandService,
    ExceptionService,
    ProductService,
    SlideService,
    TypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
