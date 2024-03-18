import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapServicve } from '../services/face-snaps.service';
import { Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  constructor(private faceSnapService: FaceSnapServicve) {}
  mySnaps! : FaceSnap[]
  private destroy$! : Subject <boolean>
  ngOnInit(): void {
    this.destroy$ = new Subject <boolean>()
    this.mySnaps = this.faceSnapService.getAllFaceSnaps()
    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)

    ).subscribe();


  }

  ngOnDestroy(){
    this.destroy$.next(true)
  }
}
