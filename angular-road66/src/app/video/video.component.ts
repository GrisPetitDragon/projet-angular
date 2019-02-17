import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagingService } from '../messaging.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  urlMp4 = 'https://archive.org/download/Route_66_-_an_American_badDream/Route_66_- _an_American_badDream_512kb.mp4';
  urlOgg = 'https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.ogv';
  messages: Subscription;
  time = "0";
  constructor(private messageService: MessagingService) { }



  ngOnInit() {
    this.messages = this.messageService.time.subscribe(
      time => {
        if (time !== undefined) {
          this.changeChapter(time);
        } else {
          console.error("Video Component received undefined time");
          console.log(time);
        }
      });
    this.messageService.postTime("0");
  }

  public changeChapter(time) {
    console.log("Timestamp :", time);
    this.time = time;
  }

}
