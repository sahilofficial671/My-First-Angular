import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydate',
  templateUrl: './mydate.component.html',
  styleUrls: ['./mydate.component.css']
})
export class MydateComponent implements OnInit {
  message:string = "Angular Example.";
  address:any;
  dateString:string;

  isClicked:boolean = true;

  constructor() {
    setInterval(()=>{
      this.dateString = new Date().toDateString() +" "+  new Date().toTimeString();
      this.dateString = new Date().toLocaleTimeString()
    }, 1000);

    this.intializeAddress();
   }

  ngOnInit(): void {
  }

  intializeAddress(){
    this.address = {
      name:"Sahil",
      city:"faridabad",
      mobile: [
        "9560487757",
        "1231232"
      ],
    };
  }

  sumT(num1:number, num2:number){
    return num1 + num2;
  }

  toggle():void{
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
  }

}
