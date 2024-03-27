import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.models';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit,/** */ OnDestroy {

  constructor(private faceSnapService: FaceSnapService) {}
  mySnaps! : FaceSnap[]
  mySnaps$!: Observable <FaceSnap[]>
  private destroy$! : Subject <boolean>
  ngOnInit(): void {
    this.destroy$ = new Subject <boolean>()
    // this.mySnaps = this.faceSnapService.getAllFaceSnaps()
    this.mySnaps$ = this.faceSnapService.getAllFaceSnaps()
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)

    // ).subscribe();


  }

  ngOnDestroy(){
    this.destroy$.next(true)
  }
}
