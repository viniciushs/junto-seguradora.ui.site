import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SeguradoraService } from 'src/app/services/seguradora.service';
import { Seguradora } from 'src/app/models/seguradora.model';
import { AppResponse } from 'src/app/models/response.model';
import { AuthUser } from 'src/app/models/auth-user.model';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sideNavMode = 'side';
  public sideNavOpened = true;

  public seguradoras: Seguradora[] = [];

  public loggedUser: AuthUser = new AuthUser();

  constructor(public seguradoraService: SeguradoraService, public tokenService: TokenService) {
    this.loggedUser = this.tokenService.getLoggedUser();
  }

  public ngOnInit() {
    this.loadSeguradoras();
  }

  public loadSeguradoras() {
    this.seguradoraService
      .get()
      .subscribe((response: AppResponse) => {
        this.seguradoras = response.data as Seguradora[];
      });
  }
}
