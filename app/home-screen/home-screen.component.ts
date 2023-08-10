import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile-screen/user-profile.service';
import { CalendarEvent } from 'angular-calendar';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  firstName: string;
  
  banners = {
  showNotification1: true, 
  showNotification2: true, 
  showNotification3: true, 
  showNotification4: true, 
  showNotification5: true,  
  showNotification6: true, 

  showMeeting1: true,  
  showMeeting2: true, 
  showMeeting3: true, 
  showMeeting4: true, 
  showMeeting5: true,  
  showMeeting6: true,
    
  };
  


  
  
  constructor(private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.firstName = this.userProfileService.getProfile().firstName;
    
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    weekends: false,
    events: [
      { title: 'AD Demo', date: '2023-07-26', color: "rgba(44, 168, 255, 0.96)"},
      { title: 'Demo with Abigail', date: '2023-07-20', color: "rgba(44, 168, 255, 0.96)"},
      {title: 'Team Meeting', date: '2023-07-28', color: "rgba(255, 178, 54, 0.96)"},
      {title: 'Finance Info Session', date: '2023-08-01', color: "rgba(255, 54, 54, 0.96)"},
      {title: 'Coffee Chat', date: '2023-08-03', color: "rgba(44, 168, 255, 0.96)"}, 
      {title: 'SCRUM Session', date: '2023-07-18', color: "rgba(255, 178, 54, 0.96)"},
    ],
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  closeNotification(notification: string): void {
    if (this.banners.hasOwnProperty(notification)) {
      this.banners[notification] = false;
    }
  }

  
  

}

