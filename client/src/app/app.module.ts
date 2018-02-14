import { BrowserModule } from '@angular/platform-browser';
import { NgModule, TemplateRef } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HttpClient }    from '@angular/common/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { FilmsService } from './services/films.service';
import { LocationsService } from './services/locations.service';
import { ShowingsComponent } from './components/pages/showings/showings.component';
import { FilmsComponent } from './components/pages/films/films.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { InfoComponent } from './components/pages/info/info.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { FilmComponent } from './components/pages/film/film.component';
import { LocationComponent } from './components/pages/location/location.component';
import { RoomsService } from './services/rooms.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavComponent,
    ShowingsComponent,
    FilmsComponent,
    LocationsComponent,
    InfoComponent,
    AdminComponent,
    FilmComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FilmsService, LocationsService, RoomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
