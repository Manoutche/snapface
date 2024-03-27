import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./face-snaps/components/single-face-snap/single-face-snap.component";
import { NewFaceSnapComponent } from "./face-snaps/components/new-face-snap/new-face-snap.component";
import { FaceSnapListComponent } from "./face-snaps/components/face-snap-list/face-snap-list.component";

const routes :Routes = [
  {
    path : '',
    component : LandingPageComponent
  },
  {
    path : 'facesnaps',
    component : FaceSnapListComponent
  },{
    path : 'create',
    component : NewFaceSnapComponent
  },
  {
    path : 'facesnaps/:id',
    component : SingleFaceSnapComponent
  }
]

@NgModule({
  imports : [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})

export class AppRoutingModule {
  constructor() {

  }
}
