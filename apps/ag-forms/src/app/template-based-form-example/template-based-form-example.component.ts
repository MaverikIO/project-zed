import { Component } from "@angular/core";
import { FormGroup, fb } from "@agape/forms";


@Component({
    selector: 'app-template-based-form-example',
    templateUrl: 'template-based-form-example.component.html'
})
export class TemplateBasedFormExampleComponent {
    
    form: FormGroup


    item = { name: "Foo", age: 26 }

    constructor() {
        this.form = fb.string('name')
    }

    ngOnInit() {
        console.log(this.form)
    }
    submit() {
        console.log(this.item)
    }

}

