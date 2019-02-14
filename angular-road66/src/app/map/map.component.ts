import { ChapterService } from './../chapter/chapter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'angular-road66';
  mrk = {
    long: 46.879966,
    lat: -121.72690,
  };
  public options;
  public chapters;
  public myLayers = [];
  public pointeurs = [];

  private constructor(private chapterService: ChapterService) {

  }
  ngOnInit() {
    this.chapterService.getChapters().subscribe(chapters => {
      this.chapters = chapters;
      for (chapter of this.chapters)
        const point = marker([this.mrk.long, this.mrk.lat], {
          icon: icon({
            iconSize: [25, 41],
            iconAnchor: [13, 41],
            iconUrl: 'marker-icon.png'
          })
        });
    });


    this.myLayers.push(point);
    this.myLayers.push(tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }));
    this.options = {
      layers: this.myLayers,
      zoom: 7,
      center: latLng(46.879966, -121.726909)
    };
  }


}
