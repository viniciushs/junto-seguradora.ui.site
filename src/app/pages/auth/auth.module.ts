import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from 'src/app/shared-material.module';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxMaskModule } from 'ngx-mask';
import { SharedPipesModule } from 'src/app/shared/pipes/shared-pipes.module';
import { MatButtonToggleModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutes } from './auth.routing';
import { CardLoginComponent } from './card-login/card-login.component';
import { CardRememberComponent } from './card-remember/card-remember.component';
import { AuthComponent } from './auth.component';
import { CardRegisterComponent } from './card-register/card-register.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        RouterModule.forChild(AuthRoutes),
        NgxFileDropModule,
        NgxMaskModule,
        MatButtonToggleModule,
        SharedPipesModule,
        SharedModule
    ],
    declarations: [
        AuthComponent,
        CardLoginComponent,
        CardRegisterComponent,
        CardRememberComponent
    ],
    exports: [
    ],
    providers: [
    ]
})
export class AuthModule {
}
