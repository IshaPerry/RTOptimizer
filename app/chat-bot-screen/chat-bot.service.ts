import { EventEmitter, Injectable, Output } from '@angular/core';
import { ReservationService } from '../reservation-screen/reservation.service';
import { Message } from './message-model';
import { UserProfileService } from '../user-profile-screen/user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class ChatBotService {
  @Output() checkScroll = new EventEmitter<boolean>();

  commandSuggestions: string[] = [
    "What's the best time to get to work {add ons}",
    "Schedule me a conference room/collaboration space/temporary workspace {add ons}",
    "Reserve me a seat {add ons}",
    "Where is {{add ons}} sitting today"
  ]

  commandAddons: string[][] = [
    [ 'to park on floor 1', 'to get cubicle 2c5', 'to beat the morning traffic'],
    [ 'for 6 pm', 'with 5 seats', 'for 1 hour'],
    [ 'that is quiet', 'next to my teammates', 'around my favorite spot' ],
    ['my business partner', 'my associate director', 'teammate name']
  ]

  messages: Message[] = [
    new Message('Hey there, I\'m RTO Bot! How can I help you?', 'bot'),
  ]
  
  constructor(private reservationService: ReservationService, private userProfileService: UserProfileService) { }

  sendMessage(newMessage: String) {
    this.messages.push(new Message(newMessage, 'user'));
    this.botLogic(newMessage);
    this.checkScroll.emit(true);
  }

  botLogic(message: String) {
    let output: string = '';
    // checks for what is the best time commands
    if(message.toLowerCase().includes("reserve") && message.toLowerCase().includes('dwight')) {
       output += 'Cubicle 2c4 is taken. You are spot 1 on the waitlist. A nearby cubicle 2c7 has been reserved for now.';
       this.reservationService.makeReservation(this.reservationService.reservations[6], this.userProfileService.userProfile);
       this.userProfileService.updateUserReservations();
    } 
    else if (message.includes('best time')) {
      if (message.includes('park')) {
        output += 'Based on garage wi-fi signal data from previous days, you should plan to arrive before 8:03am EST.';
      }
      else if (message.includes('cubicle')) {
        output += 'Most employees come in around 8:30am EST!';
      }
      else if (message.includes('traffic')) {
        output += 'Pulling in traffic data, if you take highway 400, you should plan to arrive before 8:07am EST. If you take interstate 285, you should arrive before 8:05am EST.';
      }
      else {
        output += 'Most employees come in around 8:30am EST!';
      }
    }

    // schedules areas
     else if (message.includes('conference room') || message.includes('collaboration') || message.includes('temporary workspace')) {
      if (message.includes('conference room')) {
        output += 'Conference room 2cr1 ';
        this.reservationService.makeReservation(this.reservationService.reservations[16], this.userProfileService.userProfile);
        this.userProfileService.updateUserReservations();
      } else if (message.includes('collaboration space')) {
        output += 'Small office 2so2 ';
        this.reservationService.makeReservation(this.reservationService.reservations[11], this.userProfileService.userProfile);
        this.userProfileService.updateUserReservations();
      } else {
        output += 'Small office 2so3 ';
        this.reservationService.makeReservation(this.reservationService.reservations[12], this.userProfileService.userProfile);
        this.userProfileService.updateUserReservations();
      }
        // if (message.includes('pm') || message.includes('am')) {
        //   this.messages.push(new Message('Conference room 2cr1 has been reserved!', 'bot'));
        // }
        // else if (message.includes('seats')) {
        //   this.messages.push(new Message('Conference room 2cr1 has been reserved!', 'bot'));
        // }
        // else if (message.includes('hours')) {
        //   this.messages.push(new Message('Conference room 2cr1 has been reserved!', 'bot'));
        // }
        // else {
        //   this.messages.push(new Message('Conference room 2cr1 has been reserved!', 'bot'));
        // }
      
      output += 'has been reserved!';
    }

    else if (message.includes('seat') || message.includes('cubicle')) {
      output += 'Cubicle 2c7 '
      this.reservationService.makeReservation(this.reservationService.reservations[6], this.userProfileService.userProfile);
      this.userProfileService.updateUserReservations();
      output += 'has been reserved!';
    } else if(message.toLowerCase().includes('where') || message.includes('is sitting')) {
        if(message.toLowerCase().includes('david gordon')) {
          output += 'Floor 2, cubicle c4';
        } else if(message.toLowerCase().includes('jim halpert')) {
          output += 'Floor 2, cubicle c1';
        } else if(message.toLowerCase().includes('eric lim')) {
          output += 'Floor 2, cubicle c2';
        } else if (message.toLowerCase().includes('dwight')) {
          output += 'Floor 2, cubicle c3';
        }
        else if(message.toLowerCase().includes('david morgan')) {
          output += 'Floor 2, cubicle c5';
        } else if(message.toLowerCase().includes('isha perry')) {
          output += 'Floor 2, cubicle c3';
        } else if(message.toLowerCase().includes('pranav setlur')) {
          output += 'Floor 2, cubicle c6';
        }else if(message.toLowerCase().includes('business partner') || message.toLowerCase().includes('bp') ) {
          output += 'Sorry, it appears your BP is not in the office yet. I will notify you on the home page when they arrive.';
        } else if(message.toLowerCase().includes('associate director') || message.toLowerCase().includes('ad') ) {
          output += 'Your AD has chosen to keep their location private today.';
        } else if(message.toLowerCase().includes('isha') || message.toLowerCase().includes('david') || message.toLowerCase().includes('pranav') || message.toLowerCase().includes('eric') || message.toLowerCase().includes('jim')) {
          output += 'Please repeat the question with the employee\'s last name.';
        } else {
          output += 'Sorry, the individual requested is not shown in your organizations.'
        }

    } 

    // else if (message.includes('conference room')) {
    //   if (message.includes('')) {
    //     this.messages.push(new Message('', 'bot'));
    //   }
    //   else if (message.includes('')) {
    //     this.messages.push(new Message('', 'bot'));
    //   }
    //   else if (message.includes('')) {
    //     this.messages.push(new Message('', 'bot'));
    //   }
    //   else {
    //     this.messages.push(new Message('', 'bot'));
    //   }
    // }

    else {
      output += 'Sorry I didn\'t understand that. Ask me again!';
    }
    this.messages.push(new Message(output, 'bot'));
  }

}
