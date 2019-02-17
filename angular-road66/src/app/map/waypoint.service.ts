import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Waypoint } from './../model/Waypoint';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaypointService {

  private waypointsSubject: BehaviorSubject<Waypoint[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) {
    this.pullWaypoints();
  }
  /**
   * Pulls chapters from the server and updates data in the chaptersSubject
   */
  private pullWaypoints() {
    this.http.get('./assets/chapters.json', { responseType: 'json' }).subscribe(data => {
      this.waypointsSubject.next(data['Waypoints']);
    });
  }

  public getWaypoints(): Observable<Waypoint[]> {
    return this.waypointsSubject.asObservable();
  }
}
