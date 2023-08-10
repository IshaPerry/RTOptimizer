import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BuildingService } from './building.service';
import { Building } from './building.model';
import { Message } from '../chat-bot-screen/message-model';
import { ChatBotService } from '../chat-bot-screen/chat-bot.service';
import { UserProfileService } from '../user-profile-screen/user-profile.service';

@Component({
  selector: 'app-reservation-screen',
  templateUrl: './reservation-screen.component.html',
  styleUrls: ['./reservation-screen.component.css']
})
export class ReservationScreenComponent implements OnInit {

  buildings: Building[];
  selectedBuilding: number = 0;
  floorImages: String[];
  selectedFloor: number = 0;
  defaultFloorLayoutPath: string = '../assets/img/floor-layouts/no-floor-plan.jpg'
  imageFound: boolean;

  floor4Image: String;

  // chat bot service
  @ViewChild('messageInput') messageInput: ElementRef;
  @ViewChild('messageContainer') messageContainer: ElementRef;
  
  checkScroll = false;
  commandSuggestions: string[];
  commandAddons: string[][];
  messages: Message[];
  adminStatus: boolean;

  constructor(private buildingService: BuildingService, private chatBotService: ChatBotService, 
              private userProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.buildings = this.buildingService.buildings;
    this.imageFound = true;
    this.floorImages = this.buildingService.building1.floorImages;
    this.floor4Image = this.floorImages[3].slice();
    this.commandSuggestions = this.chatBotService.commandSuggestions;
    this.commandAddons = this.chatBotService.commandAddons;
    this.messages = this.chatBotService.messages;
    this.chatBotService.checkScroll.subscribe(
      (status: boolean) => {
        this.checkScroll = status;
      });
    this.userProfileService.updateUserReservations();
    this.adminStatus = this.userProfileService.adminStatus;
     this.userProfileService.adminStatusUpdate.subscribe(
      (updatedStatus: boolean) => {
        this.adminStatus = updatedStatus;
      });
  }

  ngAfterViewChecked(): void {
    if (this.checkScroll) {
      this.scrollToBottom();
      this.checkScroll = false;
    }
  }

  onSelectFloor(floorNumber: number) {
    this.selectedFloor = floorNumber;
  }

  onFileSelected(filePath: string) {
    this.floorImages[this.selectedFloor] = filePath;
  }

  onImageLoad(src: string) {
    if (src.includes('no-floor-plan.jpg') || src.includes('../assets/img/floor-layouts/floor-1-layout.jpg')) {
      this.imageFound = false;
    } else {
      this.imageFound = true;
    }
  }

  sendMessage(newMessage: String) {
    if (newMessage.replaceAll(' ', '') === '') {
      return;
    }
    this.messageInput.nativeElement.value = '';
    this.chatBotService.sendMessage(newMessage);
    // this.messages.push(new Message(newMessage, 'user'));
    // this.botLogic(newMessage);
    // this.checkScroll = true;
  }

  scrollToBottom(): void {
    try {
      this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  onHeatMapClick() {
    if (this.floorImages[3] === this.floor4Image) {
      this.floorImages[3] = '../assets/img/floor-layouts/floor-4-heatmap-layout.jpg';
    } else {
      this.floorImages[3] = this.floor4Image;
    }
  }
}
