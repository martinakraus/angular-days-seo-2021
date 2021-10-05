import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pokemon',
        pathMatch: 'full'
    },
    {
        path: 'pokemon',
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: ':id',
                component: DetailComponent
            }
        ]
    }


];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
