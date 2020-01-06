import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SessionService } from './shared/services/session.service';
import { StorageService } from './shared/services/storage.service';
import { TokenService } from './shared/services/token.service';
import { HttpCustomInterceptor } from './shared/interceptors/http.interceptor';
import { AlertService } from './shared/services/alert.service';
import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';
import { DatePipe, registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import ptBr from '@angular/common/locales/pt';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { WindowService } from './shared/services/window.service';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthService } from './services/auth.service';

registerLocaleData(ptBr);

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    SharedModule,
    SwiperModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened: 1,
      autoDismiss: true
    }),
    Ng5SliderModule,
    NgbModule
  ],
  providers: [
    SessionService,
    StorageService,
    TokenService,
    AuthService,
    DatePipe,
    AlertService,
    WindowService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    },
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCustomInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
