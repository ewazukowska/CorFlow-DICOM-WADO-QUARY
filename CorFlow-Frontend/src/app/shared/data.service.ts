import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lesion } from "../models/lesions.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private responseListSource = new BehaviorSubject<Lesion[]>([]);
  currentResponseList = this.responseListSource.asObservable();

  updateResponseList(responseList: Lesion[]) {
    this.responseListSource.next(responseList);
  }
}
