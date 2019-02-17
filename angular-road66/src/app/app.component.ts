import { Chapter } from './model/Chapter';
import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon, Layer, Marker } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-road66';
}
