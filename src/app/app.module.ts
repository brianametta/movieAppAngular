import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { DataService } from "./data.service";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule } from "@angular/forms";
import { OnInit } from "@angular/core";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, AngularFontAwesomeModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
