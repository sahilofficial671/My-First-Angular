import { Component, Input, OnInit } from '@angular/core';
import { PrintingService } from '../printing.service';
import { User } from './user.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  @Input("username") username:string;
  @Input("password") password:string;
  myText:string = "Sample text";

  printService:PrintingService;

  user:User;

  constructor(myPrintService:PrintingService) {
    this.printService = myPrintService;
    this.printService.writeConsole("Asd")
    this.user = new User();
    this.user.username = "Sahil"
    this.user.password ="Sahilp"

    console.log("Username: "+this.user.username);
    console.log("Password: "+this.user.password);
  }

  ngOnInit(): void {
    console.log("Username: "+this.user.username);
    console.log("Password: "+this.user.password);
  }

  display():void{
    console.log("Username: "+this.username);
    console.log("Password: "+this.password);
  }

  changeText():void{
    this.myText = "I have changed the text";
  }
}
