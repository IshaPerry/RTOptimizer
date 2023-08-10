import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from './message-model';
import { ChatBotService } from './chat-bot.service';


@Component({
  selector: 'app-chat-bot-screen',
  templateUrl: './chat-bot-screen.component.html',
  styleUrls: ['./chat-bot-screen.component.css']
})
export class ChatBotScreenComponent implements OnInit {

  @ViewChild('messageInput') messageInput: ElementRef;
  @ViewChild('messageContainer') messageContainer: ElementRef;

  checkScroll = false;

  commandSuggestions: string[];

  commandAddons: string[][];

  messages: Message[];

  constructor(private chatBotService: ChatBotService) { }

  ngOnInit(): void {
    this.commandSuggestions = this.chatBotService.commandSuggestions;
    this.commandAddons = this.chatBotService.commandAddons;
    this.messages = this.chatBotService.messages;
    this.chatBotService.checkScroll.subscribe(
      (status: boolean) => {
        this.checkScroll = status;
      });
  }

  ngAfterViewChecked(): void {
    if (this.checkScroll) {
      this.scrollToBottom();
      this.checkScroll = false;
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
}
