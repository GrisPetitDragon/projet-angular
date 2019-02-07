import { Chapter } from './../model/Chapter';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private chaptersSubject: BehaviorSubject<Chapter[]> = new BehaviorSubject([]);
  constructor(private http: HttpClient) {
    this.pullChapters();
  }
/**
 * Pulls chapters from the server and updates data in the chaptersSubject
 */
  private pullChapters() {
    this.http.get('./assets/chapters.json', { responseType: 'json' }).subscribe(data => {
      this.chaptersSubject.next(data['Chapters']);
    });
  }

  public getChapters(): Observable<Chapter[]> {
    return this.chaptersSubject.asObservable();
  }
}
