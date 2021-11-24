import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    /**
     * Usamos AbstractControl, cuando no estamos
     * seguros si se trata de un formGroup o formControl
     * validate(control: AbortController){}
     */
    validate(formGroup: FormGroup){
        const { password, passwordConfirmation } = formGroup.value;

        if(password === passwordConfirmation){
            return null;
        }else {
            return { passwordsDontMatch: true };
        }
        
    }
}
