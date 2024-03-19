import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapeView$!: Observable<FaceSnap>
  constructor(private formBuid: FormBuilder){

  }

  ngOnInit(): void {
    this.snapForm = this.formBuid.group({
       title : "la mine d'or de Lafigué",
       description : "Le canadien Endeavour mining annonce un investissement de 448 millions de dollars, soit 300,7 milliards FCFA, pour la construction de sa mine d'or Lafigué, un important projet aurifère situé dans le centre- nord de la Côte d'Ivoire, dont il a décroché la licence d'exploration en 2015.",
       imgaeUrl : 'https://www.sikafinance.com/handlers/image_news_get.ashx?id=90B1825D-C3B1-488E-AA45-3B5B5D5DE580',
       location : 'Dabakala',
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
    console.log(this.snapForm.value)
  }

}
