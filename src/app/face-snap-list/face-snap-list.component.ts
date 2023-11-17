import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapServicve } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapService: FaceSnapServicve) {}
  mySnaps! : FaceSnap[]

  ngOnInit(): void {
    this.mySnaps = this.faceSnapService.getAllFaceSnaps()

  }
}
