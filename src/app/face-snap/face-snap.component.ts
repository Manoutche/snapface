import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap! : FaceSnap

  btnText! : string

  constructor(private faceSnapsService : FaceSnapService, private router : Router){

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
  onViewFaceSnap(){
    this.router.navigateByUrl('facesnaps/'+this.faceSnap.id)
  }
}
