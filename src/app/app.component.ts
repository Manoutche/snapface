import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnaps! : FaceSnap[]

  ngOnInit(): void {
    this.mySnaps =[{
    title : 'OPERAS'
    ,description :  "My photo de profile EDV"
    ,imgaeUrl :  'http://operasity/assets/img/operas_logo.png'
    ,createDate : new Date()
    ,snap : 200
}

,{
    title : 'EDV'
    ,description : "profile EDV"
    ,imgaeUrl : 'http://operasity/assets/img/logo.png'
    ,createDate : new Date()
    ,snap : 3
    ,location : 'Abidjan'
  }


,{
    title : 'ITY'
    ,description : "ITY photo de profile "
    ,imgaeUrl : 'http://operasity/assets/img/ity_logo.png'
    ,createDate :  new Date()
    ,snap :  0
    ,location : 'Zouan Hin'
  }]


  }
}
