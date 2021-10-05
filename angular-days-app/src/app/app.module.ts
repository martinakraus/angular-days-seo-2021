import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ListComponent,
        ListItemComponent,
        DetailComponent
    ],
    imports: [
        BrowserModule,
        AppMaterialModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
