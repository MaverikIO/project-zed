import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";



@Component({
    selector: 'app-material-forms-demo',
    templateUrl: 'material-forms-demo.component.html'
})
export class MaterialFormsDemoComponent {
    

    fb = new FormBuilder()

    form = this.fb.group({
        name: ['', Validators.required],
        age: [],
    })

    submit() {
        console.log(this.form.value)
    }

}