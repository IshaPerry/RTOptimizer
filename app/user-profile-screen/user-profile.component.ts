import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Profile } from './profile.model';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('usernameInput') usernameInputRef: ElementRef;
  @ViewChild('roleInput') roleInputRef: ElementRef;

  userProfile: Profile;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.userProfile = this.userProfileService.getProfile();
    this.userProfileService.profileUpdated.subscribe(
      (profile: Profile) => {
        this.userProfile = profile;
      }
    );
  }

  onSaveProfile() {
    const updatedFirstName = this.firstNameInputRef.nativeElement.value;
    const updatedLastName = this.lastNameInputRef.nativeElement.value;
    const updatedUsername = this.usernameInputRef.nativeElement.value;
    const updatedRole = this.roleInputRef.nativeElement.value;
    if (updatedFirstName === '' || updatedLastName === '' || updatedRole === '') {
      alert('Please insert a value for all fields');
      return;
    }
    this.userProfileService.setProfile(updatedFirstName, updatedLastName, updatedUsername, updatedRole);
  }
  
}
