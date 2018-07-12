import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
          MatButtonModule,
          MatCheckboxModule,
          MatAutocompleteModule,
          MatDatepickerModule,
          MatFormFieldModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatMenuModule,
          MatSidenavModule,
          MatToolbarModule,
          MatCardModule,
          MatDividerModule,
          MatExpansionModule,
          MatGridListModule,
          MatListModule,
          MatStepperModule,
          MatTabsModule,
          MatTreeModule,
          MatButtonToggleModule,
          MatBadgeModule,
          MatChipsModule,
          MatIconModule,
          MatProgressSpinnerModule,
          MatProgressBarModule,
          MatBottomSheetModule,
          MatDialogModule,
          MatSnackBarModule,
          MatTooltipModule,
          MatPaginatorModule,
          MatSortModule,
          MatTableModule
        }
        from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
