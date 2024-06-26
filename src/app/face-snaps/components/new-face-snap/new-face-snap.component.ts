import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.models';
import { FaceSnapService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapeView$!: Observable<FaceSnap>
  urlRegex!: RegExp;

  constructor(
    private formBuid: FormBuilder,
    private faceSnapsService: FaceSnapService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuid.group({
       title : [null,Validators.required],
       description : [null,Validators.required],
       imageUrl : [null,[Validators.required,Validators.pattern(this.urlRegex)]],
      //  'assets/aire_speed.jpg'
       location : [null],
    },{
      updateOn: 'blur',
    });
    this.faceSnapeView$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createDate : new Date(),
        id: 0,
        snap:0
      }))


    );
  }

  onSubmitForm(): void {
    this.faceSnapsService.addFaceSnap(this.snapForm.value).pipe(
      tap(()=> this.router.navigateByUrl('/facesnaps'))
    ).subscribe()

  }

}
