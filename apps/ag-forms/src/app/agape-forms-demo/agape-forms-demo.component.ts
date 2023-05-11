import { Component } from "@angular/core";
import { FormGroup, fb } from "@agape/forms";


@Component({
    selector: 'app-agape-forms-demo',
    templateUrl: 'agape-forms-demo.component.html'
})
export class AgapeFormsDemoComponent {
    
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

