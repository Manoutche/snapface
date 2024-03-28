import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, /** route module */
    FormsModule, /** form module */
    HttpClientModule,
    CoreModule,
    LandingPageModule,
    FaceSnapsModule,
    AuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

 }
