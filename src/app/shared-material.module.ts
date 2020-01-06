import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbar,
  MatToolbarModule,
  MatGridListModule,
  MatGridTile,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatExpansionModule,
  MatBadgeModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatMenuModule,
  MatAutocompleteModule,
  
} from '@angular/material';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatStepperModule } from '@angular/material/stepper';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTabsModule,
    MatTooltipModule,
    NgbTooltipModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    SwiperModule,
    MatListModule,
    MatStepperModule,
    MatMenuModule,
    ScrollingModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTabsModule,
    MatTooltipModule,
    NgbTooltipModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    SwiperModule,
    MatListModule,
    MatStepperModule,
    MatMenuModule,
    ScrollingModule,
    MatAutocompleteModule
  ]
})
export class SharedMaterialModule {
}
