import { Injectable }  from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapServicve {
  mySnaps: FaceSnap[] =[{
    id : 1
    ,title : 'OPERAS'
    ,description :  "My photo de profile EDV"
    ,imgaeUrl :  'http://operasity/assets/img/operas_logo.png'
    ,createDate : new Date()
    ,snap : 200
}

,{
    id:2
    ,title : 'EDV'
    ,description : "profile EDV"
    ,imgaeUrl : 'http://operasity/assets/img/logo.png'
    ,createDate : new Date()
    ,snap : 3
    ,location : 'Abidjan'
  }


,{
    id:3
    ,title : 'ITY'
    ,description : "ITY photo de profile "
    ,imgaeUrl : 'http://operasity/assets/img/ity_logo.png'
    ,createDate :  new Date()
    ,snap :  0
    ,location : 'Zouan Hin'
  }]

  getAllFaceSnaps() : FaceSnap[] {
    return this.mySnaps
  }
}
