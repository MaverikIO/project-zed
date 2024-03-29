import { Route } from "@angular/router";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminIndexPageComponent } from "./components/admin-index-page/admin-index-page.component";
import { eventsRoutes } from "./modules/events/events.routes";
import { organizationsRoutes } from "./modules/organizations/organizations.routes";
import { usersRoutes } from "./modules/users/users.routes";
import { AuthorizedGuard } from "./modules/auth/auth.guard";

export const adminRoutes: Route[] = [
    { 
        path: 'admin', 
        component: AdminDashboardComponent,
        canActivate: [ AuthorizedGuard ],
        children: [
            { 
                path: '',
                component: AdminIndexPageComponent,
            },
            ...eventsRoutes,
            ...organizationsRoutes,
            ...usersRoutes,
        ]
    }
]