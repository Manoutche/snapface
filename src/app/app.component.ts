import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap! : FaceSnap
  lastSnap! : FaceSnap
  otherSnap! : FaceSnap

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
    'OPERAS'
    , "My photo de profile EDV"
    ,'http://operasity/assets/img/operas_logo.png'
    , new Date()
    , 6

    )
    this.otherSnap = new FaceSnap(
    'EDV'
    , "profile EDV"
    ,'http://operasity/assets/img/logo.png'
    , new Date()
    , 3

    )
    this.lastSnap = new FaceSnap(
    'ITY'
    , "ITY photo de profile "
    ,'http://operasity/assets/img/ity_logo.png'
    , new Date()
    , 0

    )
  }
}
