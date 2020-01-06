import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared-material.module';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SlidePanelComponent } from './components/slide-panel/slide-panel.component';

@NgModule({
  imports: [
    SharedMaterialModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    SlidePanelComponent,
    FooterComponent
  ],
  declarations: [
    SlidePanelComponent,
    FooterComponent
  ],
  entryComponents: [
  ]
})
export class SharedModule {
}
