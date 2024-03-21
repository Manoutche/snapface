import { Injectable }  from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  constructor (private http: HttpClient){

  }
  mySnaps: FaceSnap[] =[]

  getAllFaceSnaps() : Observable <FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
  }

  getFaceSnapsById(faceSnapId : number):  Observable <FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  likeFaceSnapById(faceSnapId : number, action : string): Observable <FaceSnap> {
    return this.getFaceSnapsById(faceSnapId).pipe(
      map(faceSnap =>({
        ...faceSnap,
        snaps : action == "Je retire" ? --faceSnap.snaps: ++faceSnap.snaps
      })),

      switchMap(updatedFaceSnap =>
       this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap))
    )
  }

  addFaceSnap(newData:{title:string, description:string, location?:string,imageUrl:string}):void {
    const faceSnap: FaceSnap ={
      ...newData,
      createdDate : new Date(),
        id: this.mySnaps[this.mySnaps.length -1].id + 1,
        snaps:0
    }
    this.mySnaps.push(faceSnap)
  }
}

