import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-parking-screen',
  templateUrl: './parking-screen.component.html',
  styleUrls: ['./parking-screen.component.css']
})
export class ParkingScreenComponent implements OnInit {


  ngOnInit(): void {

  }
  
  showA: boolean = false;
  showB: boolean = false;
 
  showImageA() {
    this.showA = !this.showA;
  }

  showImageB() {
    this.showB = !this.showB;
  }

  

  

  


  
  



 





}

