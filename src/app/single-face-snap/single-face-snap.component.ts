import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapServicve } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  @Input() faceSnap! : FaceSnap

  btnText! : string

  constructor(private faceSnapsService : FaceSnapServicve){

  }
  ngOnInit() {
    this.btnText = "J'aime"

  }
  onSnap(){
    if (this.btnText != "J'aime") {
      this.btnText = "J'aime"
    } else {
      this.btnText = "Je retire"
    }
    this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, this.btnText)
  }
}
