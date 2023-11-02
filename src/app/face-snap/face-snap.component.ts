import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap! : FaceSnap

  btnText! : string

  ngOnInit() {
    this.btnText = "J'aime"

  }
  onSnap(){
    if (this.btnText != "J'aime") {

      this.faceSnap.snap--
      this.btnText = "J'aime"
    } else {
      this.faceSnap.snap++
      this.btnText = "Je retire"
    }
  }
}
