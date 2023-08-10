import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
// import { LoginScreenComponent } from 'src/app/login-screen/login-screen.component';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'location_world', class: '' },
    { path: '/parking', title: 'Parking',  icon:'transportation_bus-front-12', class: '' },
    { path: '/chat-bot', title: 'Chat Bot', icon:'ui-2_chat-round', class: '' },
    { path: '/reservation', title: 'Reservations',  icon:'gestures_tap-01', class: '' },
    { path: '/resources', title: 'Resources',  icon:'loader_gear', class: '' },
    { path: '/data', title: 'Data',  icon:'business_chart-bar-32', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },

    // { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
    // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }
];


export const ROUTES2: RouteInfo[] = [
  { path: '/home', title: 'Home',  icon: 'location_world', class: '' },
  { path: '/parking', title: 'Parking',  icon:'transportation_bus-front-12', class: '' },
  { path: '/chat-bot', title: 'Chat Bot', icon:'ui-2_chat-round', class: '' },
  { path: '/reservation', title: 'Reservations',  icon:'gestures_tap-01', class: '' },
  { path: '/resources', title: 'Resources',  icon:'loader_gear', class: '' },
  { path: '/data-screen-emp', title: 'Data',  icon:'business_chart-bar-32', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'users_single-02', class: '' },

  // { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
  // { path: '/icons', title: 'Icons',  icon:'education_atom', class: '' },
  // { path: '/maps', title: 'Maps',  icon:'location_map-big', class: '' },
  // { path: '/notifications', title: 'Notifications',  icon:'ui-1_bell-53', class: '' },
  // { path: '/table-list', title: 'Table List',  icon:'design_bullet-list-67', class: '' },
  // { path: '/typography', title: 'Typography',  icon:'text_caps-small', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'objects_spaceship', class: 'active active-pro' }
];

@Component({ 
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  loggedIn: boolean;
  status = this.sharedDataService.getStatus(); 

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    if (this.status == 'Admin') {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    } else {
      this.menuItems = ROUTES2.filter(menuItem => menuItem);
    }


    
    //this.loggedIn = LoginScreenComponent.isLoggedIn();
  }

  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
  
}
