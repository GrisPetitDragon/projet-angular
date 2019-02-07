import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  private timeSource = new BehaviorSubject<string>("0");
  time = this.timeSource.asObservable();

  constructor() { }

  postTime(time: string) {
    this.timeSource.next(time);
  }

}
