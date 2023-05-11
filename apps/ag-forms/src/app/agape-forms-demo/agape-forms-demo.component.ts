import { Component } from "@angular/core";
import { FormGroup, fb } from "@agape/forms";


@Component({
    selector: 'app-agape-forms-demo',
    templateUrl: 'agape-forms-demo.component.html'
})
export class AgapeFormsDemoComponent {
    
    agForm: FormGroup


    item = { name: "Foo", age: 26 }

    constructor() {
        this.agForm = fb.string('name').number('age')
    }

    ngOnInit() {
        console.log(this.agForm)
    }
    submit() {
        console.log(this.item)
    }

}

