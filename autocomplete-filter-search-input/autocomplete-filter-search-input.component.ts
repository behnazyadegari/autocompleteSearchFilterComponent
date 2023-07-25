import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime,switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';

export function RequireMatch(control: AbstractControl) {
  const selection: any = control.value;
  if (typeof selection === 'string' && control.value) {
    return { incorrect: true };
  }
  return null;
}

@Component({
    selector: 'app-autocomplete-filter-search-input',
    templateUrl: './autocomplete-filter-search-input.component.html',
    styleUrls: ['./autocomplete-filter-search-input.component.scss']
})
export class AutocompleteFilterSearchInputComponent implements OnInit {

    @Input('formItem') form: FormGroup;
    @Input('formName') formName:string = '';
    @Input('lable') lable:string= '';
    @Input('appearance') appearance: any = '';
    @Input('isrequired') isrequired:boolean= false;
    @Input('icon') icon: string = '';
    @Input('placeholder') placeholder: string = '';
    @Input('disabled') disabled = false;
    @Input('changeSelection') changeSelection: any = () => {

    };
    @Input('_filteredList') _filteredList: any = () => { }

    filteredList: Observable<any>;

    formGroup: any;
    formNames: any;
    filter: any;
    isLoading = false;
    constructor() {

    }

    ngOnInit(): void {
        this.formGroup = this.form;
        this.formNames = this.formName;
        const formItem = this.formGroup.get(this.formNames);
        formItem.setValidators([RequireMatch]);
        formItem.updateValueAndValidity();


        this.formGroup.get(this.formName).valueChanges
            .pipe(
                debounceTime(1000),
                tap(() => {
            
                    if (this.formGroup.get(this.formName).value)
                        this.isLoading = true;
                }),
                switchMap(value => this._filteredList(value)
                )
            )
            .subscribe(data => {

                this.filteredList = data.result;
                this.isLoading = false;

            });

    }


    displayFn(item?): string | undefined {
        return item ? item.title : undefined;
    }




}
