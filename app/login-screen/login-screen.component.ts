import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from '../user-profile-screen/user-profile.service';
import { ToastrService } from 'ngx-toastr';
import { SharedDataService } from '../components/shared-data.service';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})

export class LoginScreenComponent implements OnInit {

  username: string = '';
  selectedOption: string = ''; 

  @Output() onLogin = new EventEmitter<void>();
  
  @ViewChild('employee') employeeRef: ElementRef;
  @ViewChild('admin') adminRef: ElementRef;
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  

  constructor(private router: Router, private userProfile: UserProfileService, 
              private notificationService: ToastrService, private sharedDataService: SharedDataService) { 
  }
  
  ngOnInit(): void {
  }


  selectedAdmin() {
    this.sharedDataService.setStatus("Admin");
    this.selectedOption = "Admin";
    this.userProfile.changeAdminStatus('admin');
    this.userProfile.initialAdminStatus = true;
  }
  
  selectedEmployee() {
    this.sharedDataService.setStatus("Employee");
    this.selectedOption = "Employee";
    this.userProfile.changeAdminStatus('employee');
    this.userProfile.initialAdminStatus = false;
  }

  login() {
   // this.username = this.username; 
    console.log(this.sharedDataService.getStatus());

    if (this.username != 'JHalpert1') {
      // alert('Username does not exist');
      this.showNotification('top','center', 'fail', 'Username does not exist');
      return;
    }
    this.userProfile.isLoggedIn();
    this.onLogin.emit();
    this.router.navigate(['/home']);
  }

  showNotification(from: string, align: string, alertType: string, alertMessage: string){
    if (alertType === 'success') {
      this.notificationService.success(`<span class="now-ui-icons ui-1_bell-53"></span>${alertMessage}`, '', {
        timeOut: 6000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-success alert-with-icon",
        positionClass: 'toast-' + from + '-' +  align
      });
    }

    if (alertType === 'fail') {
      this.notificationService.success(`<span class="now-ui-icons ui-1_bell-53"></span>${alertMessage}`, '', {
        timeOut: 6000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: 'toast-' + from + '-' +  align
      });
    }
  }
}
