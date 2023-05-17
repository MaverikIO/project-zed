import { Component } from "@angular/core";
import { Traits } from "../../../shared/traits";
import { HasAuthService } from "../../modules/auth";
import { HasRouter } from "../../../shared/traits/has-router";
import { AComponent } from "../../../shared/acomponent";
import { HasSnackbar } from "../../../shared/traits/has-snackbar";


export interface AdminSidenavComponent extends 
    HasAuthService,
    HasSnackbar,
    HasRouter
    { };

@Component({
    selector: 'admin-sidenav',
    templateUrl: './admin-sidenav.component.html'
})
@Traits( HasAuthService, HasRouter, HasSnackbar )
export class AdminSidenavComponent extends AComponent {

    logout() {
        this.auth.logout()
        this.router.navigate(['/'])
    }
}