import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapServicve } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap! : FaceSnap

  btnText! : string

  constructor(private faceSnapsService : FaceSnapServicve){

  }
  ngOnInit() {
    this.btnText = "J'aime"

  }
  onSnap(){
    if (this.btnText != "J'aime") {

      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, this.btnText)
      this.btnText = "J'aime"
    } else {
      this.faceSnapsService.likeFaceSnapById(this.faceSnap.id, this.btnText)
      this.btnText = "Je retire"
    }
  }
}
