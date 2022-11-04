import { EducationComponent } from './education.component';
import { Route } from '@angular/router';


export const EDUCATION_ROUTE: Route = {
    path: 'education',
    component: EducationComponent,
    data: {
        authorities: [],
        pageTitle: 'navbar.menu.education',
    },
};
