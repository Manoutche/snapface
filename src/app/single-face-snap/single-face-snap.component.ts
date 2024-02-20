import { FaceSnap } from './../models/face-snap.models';
import { Component, OnInit } from '@angular/core';
import { FaceSnapServicve } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap !: FaceSnap
  btnText! : string

  constructor(private faceSnapsService : FaceSnapServicve, private route: ActivatedRoute){

  }
  ngOnInit() {
    this.btnText = "J'aime"
    const faceSnapId = +this.route.snapshot.params['id'];

    this.faceSnap = this.faceSnapsService.getFaceSnapsById(faceSnapId )

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
