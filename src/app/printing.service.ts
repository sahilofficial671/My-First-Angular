import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintingService {

  constructor() { }

  writeConsole(content:string):void{
    console.log("Writing from service: "+content)
  }
}
