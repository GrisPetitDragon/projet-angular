import { Chapter } from './model/Chapter';
import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, Layer, Marker } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-road66';
  mrk = {
    long: 46.879966,
    lat: -121.72690,
  };
  public options;
  public myLayers = [];
  public pointeurs = [];
  //   marker([mrk.long, mrk.lat], {
  //     icon: icon({
  //       iconSize: [25, 41],
  //       iconAnchor: [13, 41],
  //       iconUrl: 'marker-icon.png'
  //     })
  //   });


  // layers = [
  //   marker([46.879966, -121.726909])
  // ];
  ngOnInit() {

    const point = marker([this.mrk.long, this.mrk.lat], {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'marker-icon.png'
      })
    });

    this.myLayers.push(point);
    this.myLayers.push(tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }));
    //this.myLayers.push(this.pointeurs);
    this.options = {
      layers: this.myLayers,
      zoom: 7,
      center: latLng(46.879966, -121.726909)
    };
    // const pic: Marker =
    //   marker([this.mrk.long, this.mrk.lat], {
    //     icon: icon({
    //       iconSize: [25, 41],
    //       iconAnchor: [13, 41],
    //       iconUrl: 'marker-icon.png'
    //     })
    //   });

    // this.pointeurs.push(pic);
    // this.pointeurs.push(pic);

    // this.myLayers.push(this.tileLayer);
    // this.myLayers.push(this.pointeurs);

    // //layers = [circle([ 46.95, -122 ], { radius: 5000 })];
    // this.options = {
    //   zoom: 7,
    //   center: latLng(46.879966, -121.726909)
    // };
  }


}
