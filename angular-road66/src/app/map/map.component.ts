import { MessagingService } from 'src/app/messaging.service';
import { marker, icon, tileLayer, latLng, Marker } from 'leaflet';
import { WaypointService } from './waypoint.service';
import { ChapterService } from './../chapter/chapter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  public options;
  public waypoints;
  public myLayers = [];
  public pointeurs = [];
  constructor(private waypointService: WaypointService, private messagingService: MessagingService) {

  }
  ngOnInit() {
    this.myLayers.push(tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }));

    // Récupération des points clés et abonnement
    this.waypointService.getWaypoints().subscribe(wps => {
      this.waypoints = wps; // on les stocke en local

    });

    this.options = {
      layers: this.myLayers,
      zoom: 7,
      center: latLng(46.879966, -121.726909)
    };

    // On s'abonne à un chagement de timestamp
    this.messagingService.time.subscribe(time => {
      for (const waypoint of this.waypoints) {
        //On détermine la couleur du point
        const point = this.generateMarker(waypoint, time);
        // Au final, on crée une nouvelle couche avec notre point
        this.myLayers.push(point);
      }

      this.options = {
        layers: this.myLayers,
        zoom: 7,
        center: latLng(46.879966, -121.726909)
      };
    });
  }

  /**
   *Génère un marqueur rouge ou vert selon que la localisation liée au chapitre est passée ou non
   * @param waypoint les données du marqueur qu'on veut créer
   * @param time le timestamp actuel de la vidéo
   */
  generateMarker(waypoint, time): Marker {
    let point;
    if (waypoint.timestamp >= time) {
      point = marker([waypoint.lat, waypoint.lng], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
        })
      });
    } else {
      point = marker([waypoint.lat, waypoint.lng], {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
        })
      });
    }

    return point;
  }

}
