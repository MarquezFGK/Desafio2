import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LibrosService} from './services/libros.service'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FichaComponent } from './ficha/ficha.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FichaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpModule,
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
