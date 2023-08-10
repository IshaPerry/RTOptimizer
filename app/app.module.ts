import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './template-files/admin-layout/admin-layout.component';
import { DataScreenComponent } from './data-screen/data-screen.component';
import { ParkingScreenComponent } from './parking-screen/parking-screen.component';
import { ReservationScreenComponent } from './reservation-screen/reservation-screen.component';
import { ResourcesScreenComponent } from './resources-screen/resources-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';



import { ReservationListComponent } from './reservation-screen/reservation-list/reservation-list.component';
import { TeamTrackerComponent } from './reservation-screen/team-tracker/team-tracker.component';
import { UserReservationListComponent } from './reservation-screen/user-reservation-list/user-reservation-list.component';
import { ReservationService } from './reservation-screen/reservation.service';
import { UserProfileService } from './user-profile-screen/user-profile.service';
import { DataScreenEmpComponent } from './data-screen-emp/data-screen-emp.component';
import { ChatBotScreenComponent } from './chat-bot-screen/chat-bot-screen.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FormsModule,
    FullCalendarModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    ChartsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DataScreenComponent,
    DataScreenEmpComponent,
    ParkingScreenComponent,
    ReservationScreenComponent,
    ResourcesScreenComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    ReservationListComponent,
    TeamTrackerComponent,
    UserReservationListComponent,
    ChatBotScreenComponent,
  ],
  providers: [ReservationService, UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
