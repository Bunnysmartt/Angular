import { AbstractControl } from "@angular/forms";
export function passwordvalidator(control: AbstractControl) {
    if (control && (control.value !== undefined || control !== null)) {
        const confirmpassworddata = control.value;
        const passtextbox = control.root.get('password');
        if (passtextbox) {
            const passworddata = passtextbox.value;
            if (passworddata == "" || passworddata !== confirmpassworddata) {
                return {
                    iserror: true
                }

            }
        }
    }
    return null;

}

export function zipvalidator(control: AbstractControl) {
    if (control && (control.value !== undefined || control !== null)) {
        const zipcode = control.value;
        const regexp = new RegExp('^[0-9]{6}$');
        if (!regexp.test(zipcode)) {
            return {
                iserror: true
            }
        }
    }
    return null;
}