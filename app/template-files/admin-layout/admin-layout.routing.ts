import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';

import { HomeScreenComponent } from '../../home-screen/home-screen.component';
import { ParkingScreenComponent } from '../../parking-screen/parking-screen.component';
import { ReservationScreenComponent } from '../../reservation-screen/reservation-screen.component';
import { ResourcesScreenComponent } from '../../resources-screen/resources-screen.component';
import { DataScreenComponent } from '../../data-screen/data-screen.component';
import { UserProfileComponent } from '../../user-profile-screen/user-profile.component';
import { LoginScreenComponent } from '../../login-screen/login-screen.component';
import { DataScreenEmpComponent } from '../../data-screen-emp/data-screen-emp.component';
import { ChatBotScreenComponent } from '../../chat-bot-screen/chat-bot-screen.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'login',          component: LoginScreenComponent},
    { path: 'home',           component: HomeScreenComponent},
    { path: 'parking',        component: ParkingScreenComponent},
    { path: 'reservation',    component: ReservationScreenComponent},
    { path: 'resources',      component: ResourcesScreenComponent},
    { path: 'data',           component: DataScreenComponent},
    { path: 'data-screen-emp',          component: DataScreenEmpComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'chat-bot',       component: ChatBotScreenComponent},

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }

];
