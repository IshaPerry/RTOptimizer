import { Component, OnInit } from '@angular/core';
declare const google: any;


interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
  }

@Component({
  selector: 'app-resources-screen',
  templateUrl: './resources-screen.component.html',
  styleUrls: ['./resources-screen.component.css']
})
export class ResourcesScreenComponent implements OnInit {
  
  showFloorInfo: boolean = false;
  showCafeteriaInfo: boolean = false;
  showAmenitiesInfo: boolean = false;
  currentDate = new Date(); 
 
  showFloorScreen() {
    this.showFloorInfo = !this.showFloorInfo;
    if (this.showCafeteriaInfo === true) {
        this.showCafeteriaInfo = false;
    }
    if (this.showAmenitiesInfo === true) {
        this.showAmenitiesInfo = false;
    }
  }

  showCafeteriaScreen() {
    this.showCafeteriaInfo = !this.showCafeteriaInfo;
    if (this.showFloorInfo === true) {
        this.showFloorInfo = false;
    }
    if (this.showAmenitiesInfo === true) {
        this.showAmenitiesInfo = false;
    }
  }

  showAmenitiesScreen() {
    this.showAmenitiesInfo = !this.showAmenitiesInfo;
    if (this.showFloorInfo === true) {
        this.showFloorInfo = false;
    }
    if (this.showCafeteriaInfo === true) {
        this.showCafeteriaInfo = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
    var myLatlng2 = new google.maps.LatLng(33.849640, -84.347888);
    var myLatlng = new google.maps.LatLng(33.850088,-84.34694);
    var mapOptions = {
        zoom: 18,
        center: myLatlng,
        scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        styles: [{
            "featureType": "water",
            "stylers": [{
                "saturation": 43
            }, {
                "lightness": -11
            }, {
                "hue": "#0088ff"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "hue": "#ff0000"
            }, {
                "saturation": -100
            }, {
                "lightness": 99
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#808080"
            }, {
                "lightness": 54
            }]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ece2d9"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ccdca1"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#767676"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#b8cb93"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.medical",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "simplified"
            }]
        }]

    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Main Office"
    });

    var marker2 = new google.maps.Marker({
        position: myLatlng2,
        title: "Parking Lot A & B"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
    marker2.setMap(map);


 

  
  }

}
function showFloorScreen() {
  throw new Error('Function not implemented.');
}

function showCafeteriaScreen() {
  throw new Error('Function not implemented.');
}

function showAmenitiesScreen() {
  throw new Error('Function not implemented.');
}

