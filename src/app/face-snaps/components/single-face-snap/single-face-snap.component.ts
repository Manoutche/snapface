import { FaceSnap } from '../../../core/models/face-snap.models';
import { Component, OnInit } from '@angular/core';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap !: FaceSnap
  faceSnap$ !: Observable <FaceSnap>
  btnText! : string

  constructor(private faceSnapsService : FaceSnapService, private route: ActivatedRoute){

  }
  ngOnInit() {
    this.btnText = "J'aime"
    const faceSnapId = +this.route.snapshot.params['id'];

    this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId )

  }
  onSnap(faceSnapId: number){

    this.faceSnap$ = this.faceSnapsService.likeFaceSnapById(faceSnapId, this.btnText).pipe(
      tap(()=>{
        if (this.btnText !== "J'aime") {
          this.btnText = "J'aime"
        } else {
          this.btnText = "Je retire"
        }
      })
    )
  }
}
