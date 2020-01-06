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
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { SeguradoraService } from 'src/app/services/seguradora.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedMaterialModule,
        RouterModule.forChild(HomeRoutes),
        NgxFileDropModule,
        NgxMaskModule,
        MatButtonToggleModule,
        SharedPipesModule,
        SharedModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
    ],
    providers: [
        SeguradoraService
    ]
})
export class HomeModule {
}
