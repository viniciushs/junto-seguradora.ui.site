import { Component, OnInit, ViewChild } from '@angular/core';
import { CardAuthEnum } from './shared/enums/card-auth.enum';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SessionService } from 'src/app/shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    watchOverflow: true,
    loop: false,
    allowTouchMove: false,
    noSwiping: false,
    pagination: false,
    initialSlide: CardAuthEnum.Login
  };

  swiperWrapperIndex: number;
  @ViewChild('swiperWrapper', { static: false }) public swiperWrapper: any;

  constructor(
    public router: Router,
    public sessionService: SessionService) {
    if (this.sessionService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {

  }

  public goToPane(paneIndex: number) {
    this.swiperWrapperIndex = paneIndex;
    this.swiperWrapper.directiveRef.instance.slideTo(this.swiperWrapperIndex, 1000);
  }

  public goToLogin() {
    this.goToPane(CardAuthEnum.Login);
  }

  public goToRemember() {
    this.goToPane(CardAuthEnum.Remember);
  }

  public goToRegister() {
    this.goToPane(CardAuthEnum.Register);
  }
}
