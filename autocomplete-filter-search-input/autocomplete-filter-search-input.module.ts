import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CustomFormValidators } from '../../custom-validator/form-validation';
import { CustomModelValidators } from '../../custom-validator/model-validator';
import { AutocompleteFilterSearchInputComponent } from './autocomplete-filter-search-input.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';




@NgModule({
    declarations: [
        AutocompleteFilterSearchInputComponent
    ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatAutocompleteModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatProgressBarModule
    ],
    exports: [
        AutocompleteFilterSearchInputComponent
    ],
    providers: [
        CustomFormValidators,
        CustomModelValidators
    ]
})
export class AutocompleteFilterSearchInputModule { }
