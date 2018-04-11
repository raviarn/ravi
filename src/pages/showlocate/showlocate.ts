import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { LatLng, CameraPosition } from '@ionic-native/google-maps';
import { GoogleMaps, GoogleMap,Marker,MarkerOptions,
 } from '@ionic-native/google-maps';


declare var google:any;

@Component({
  selector: 'page-showlocate',
  templateUrl: 'showlocate.html'
})
export class ShowLocatePage {

  lat: any;
  lon: any;

  @ViewChild('map') mapElement: ElementRef;
  map:GoogleMap;
  constructor(public navCtrl: NavController, private geo: Geolocation, public _googleMaps: GoogleMaps) { 

    // this.ionViewOldLoad();

  }

  ngAfterViewInit(){

    this.initMap();

  }

  initMap(){

    let element = this.mapElement.nativeElement;
    this.map = this._googleMaps.create(element);

  }

  showMap()
  {
    const location = new google.maps.LatLng(this.lat,this.lon);

    const options = {
      center: location,
      zoom: 10
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement,options);

    

    var loc = new LatLng(this.lat,this.lon);

    var image = 'assets/imgs/Location_marker_pin_map_gps.png';

    var marker1 = new google.maps.Marker({
      position: loc,
      map: this.map,
      icon: image
    })

    /*

    this.createMarker(loc, "Me").then((marker: Marker) => {
      marker.showInfoWindow();
    }).catch(err => {
      console.log(err);
    });

    */

  }

  ionViewOldLoad(){

    this.geo.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      this.showMap();

     }).catch((error) => {
       console.log('Error here getting location', error);
     });
     
     let watch = this.geo.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });

  }

  createMarker(loc: LatLng, title: string){

    
    let markerOptions: MarkerOptions = {
      position: loc,
      title: title

    };

    return this.map.addMarker(markerOptions);

  }
}