import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-data-screen-emp',
  templateUrl: './data-screen-emp.component.html',
  styleUrls: ['./data-screen-emp.component.css']
})
export class DataScreenEmpComponent implements OnInit {


  public empCapacityLineChart;
  public gradientStroke;
  public chartColor;
  public canvas : any;
  public ctx;
  public gradientFill;
  public empCapacityLineChartData:Array<any>;
  public empCapacityLineChartOptions:any;
  public empCapacityLineChartLabels:Array<any>;
  public empCapacityLineChartColors:Array<any>;
  public customLegendLabels2: Array<any>;



  public gradientChartOptionsConfiguration: any;
  public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

  public lineChartType;
  public lineChartData:Array<any>;
  public lineChartOptions:any;
  public lineChartLabels:Array<any>;
  public lineChartColors:Array<any>

  public empWorkStatsBarChartType;
  public empWorkStatsBarChartData:Array<any>;
  public empWorkStatsBarChartOptions:any;
  public empWorkStatsBarChartLabels:Array<any>;
  public empWorkStatsBarChartColors:Array<any>;
  public lineChartLegend: Array<any>;
  public customLegendLabels: Array<any>;
  public barChartLabels; 

  public empWifiStrainChartType;
  public empWifiStrainChartData:Array<any>;
  public empWifiStrainChartOptions:any;
  public empWifiStrainChartLabels:Array<any>;
  public empWifiStrainChartColors:Array<any>
  
  default: boolean = true; 
  show1: boolean = false;
  show2: boolean = false;
  show3: boolean = false; 
 

  



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  constructor() { }
  

  ngOnInit() :void {
  

      this.chartColor = "#FFFFFF";
      this.canvas = document.getElementById("empCapacityChart");
      this.ctx = this.canvas.getContext("2d");
  
      this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
      this.gradientStroke.addColorStop(0, '#80b6f4');
      this.gradientStroke.addColorStop(1, this.chartColor);
  
      this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
      this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
      this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
    
  
    this.empCapacityLineChartData = [
        {
          label: "Capacity",

          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,

          borderWidth: 2,
          data: [50, 100, 100, 80, 70, 100, 200, 150, 100, 60, 40, 0]
        }
      ];

     

      this.empCapacityLineChartColors = [
       {
         backgroundColor: this.gradientFill,
         borderColor: this.chartColor,
         pointBorderColor: this.chartColor,
         pointBackgroundColor: "#2c2c2c",
         pointHoverBackgroundColor: "#2c2c2c",
         pointHoverBorderColor: this.chartColor,
       }
     ];
    
    this.empCapacityLineChartLabels = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];
    this.empCapacityLineChartOptions = {

          layout: {
              padding: {
                  left: 20,
                  right: 20,
                  top: 0,
                  bottom: 0
              }
          },
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          legend: {
              position: "bottom",
              fillStyle: "#FFF",
              display: false
          },
          scales: {
              yAxes: [{
                  ticks: {
                      fontColor: "rgba(255,255,255,0.4)",
                      fontStyle: "bold",
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      padding: 10
                  },
                  gridLines: {
                      drawTicks: true,
                      drawBorder: false,
                      display: true,
                      color: "rgba(255,255,255,0.1)",
                      zeroLineColor: "transparent"
                  },
                  scaleLabel: {
                    display: true,
                    labelString: '%'
                  }

              }],
              xAxes: [{
                  gridLines: {
                      zeroLineColor: "transparent",
                      display: false,

                  },
                  ticks: {
                      padding: 10,
                      fontColor: "rgba(255,255,255,0.4)",
                      fontStyle: "bold"
                      
                  }
              }]
          }
    };

    this.empCapacityLineChart = 'line';

    this.gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };



    this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          },
          ticks: {
              stepSize: 500
          }
        }],
        xAxes: [{
          showGridLines: "true",
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: true,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };



    this.canvas = document.getElementById("empWorkStatsChart");
    this.ctx = this.canvas.getContext("2d");
    this.ctx = this.canvas.getContext("2d");

    this.gradientFill = this.ctx.createLinearGradient(20, 0, 220, 0);
    this.gradientFill.addColorStop(0, "rgba(140, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));


   
  
     this.customLegendLabels = [
      { label: 'Parking', backgroundColor: 'rgba(206, 135, 43)' },
      { label: 'WiFi', backgroundColor: 'rgba(221, 191, 24, 0.8)' },
      { label: 'Space', backgroundColor: 'rgba(155, 91, 8)' },
    ];

   

   
    
  
    this.empWorkStatsBarChartOptions = {
      maintainAspectRatio: true,
      responsive: 1,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: 0,
          barPercentage: 0.6,
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            autoskip: false,
            fontStyle: "normal"

          },
          gridLines: {
            showGridLines: "false",
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          },
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    this.empWorkStatsBarChartData = [
      {
              data: [30, 20, 20, 40],
              backgroundColor: [
                "rgba(44, 168, 255, 0.6)",
                "rgba(128, 182, 244, 0.6)",
                "rgba(0, 182, 244, 1)",
                "rgba(100, 182, 244, 1)",
                
              ],
              
      }
    ];
    this.barChartLabels = ["Work Tasks", "TEAMS Meetings", "Networking", "In-person Meetings"];


  
   
   this.empWorkStatsBarChartLabels = ["Work Tasks", "TEAMS Meetings", "Networking", "In-person Meetings"];
 

   this.empWorkStatsBarChartType = 'pie';


    this.canvas = document.getElementById("empWifiStrainChart");
    this.ctx = this.canvas.getContext("2d");

    this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
    this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));


    this.empWifiStrainChartData = [
        {
          label: "Avg. RSSI",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [-70, -85, -85, -105, -100, -65, -70, -85, -70, -70]
        }
      ];
    this.empWifiStrainChartColors = [
     {
       backgroundColor: this.gradientFill,
       borderColor: "#2CA8FF",
       pointBorderColor: "#FFF",
       pointBackgroundColor: "#2CA8FF",
     }
   ];
    this.empWifiStrainChartLabels = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
    this.empWifiStrainChartOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: 1,
        scales: {
          yAxes: [{
            gridLines: {
              zeroLineColor: "transparent",
              drawBorder: false,
              showGridLines: "false",
            },
            ticks: {
                stepSize: 20
            },
            scaleLabel: {
              display: true,
              labelString: 'RSSI'
            }
          }],
          xAxes: [{
            display: 0,
            ticks: {
              maxRotation: 0,
              minRotation: 0,
              autoskip: false,
              fontStyle: "normal"
            },
            gridLines: {
              showGridLines: "true",
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 15,
            bottom: 15
          }
        }
      }

    this.empWifiStrainChartType = 'bar';

  }
  showImage1() {
    this.show1 = !this.show1;
    this.show2 = false; 
    this.show3 = false; 
    this.default = false; 
  }
  

  showImage2() {
    this.show2 = !this.show2;
    this.show1 = false; 
    this.show3 = false;
    this.default = false; 
  }

  showImage3() {
    this.show3 = !this.show3;
    this.show1 = false; 
    this.show2 = false; 
    this.default = false; 
  }


}

