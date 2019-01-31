import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  urlMp4 = 'https://archive.org/download/Route_66_-_an_American_badDream/Route_66_- _an_American_badDream_512kb.mp4';
  urlOgg = 'https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.ogv';
  constructor() { }

  ngOnInit() {

  }

}
