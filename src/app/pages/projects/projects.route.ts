import { ProjectsComponent } from './projects.component';

import { Route } from '@angular/router';


export const PROJECTS_ROUTE: Route = {
    path: 'projects',
    component: ProjectsComponent,
    data: {
        authorities: [],
        pageTitle: 'navbar.menu.projects',
    },
};
