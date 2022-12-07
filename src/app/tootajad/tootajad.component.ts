import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tootajad',
  templateUrl: './tootajad.component.html',
  styleUrls: ['./tootajad.component.scss']
})
export class TootajadComponent implements OnInit {
  naisteJuuksurid:Juuksur[]=[];
  meesteJuuksurid:Juuksur[]=[];
  constructor() { }

  ngOnInit(): void {
    this.generateTootajad();
  }
  generateTootajad(){
    this.naisteJuuksurid.push(
      {
        name:"Hille Käärik",
        phone:"5290215",
        registerInfo:"E-R 7:00-21:00",
      },
      {
        name:"Merike Ess",
        phone:"56603652",
        registerInfo:"E-R 7:00-21:00",
      },
      {
        name:"Astrid Kiviselg",
        phone:"56915681",
        registerInfo:"E-R 7:00-21:00",
      },
      {
        name:"Sirppa Mätlik",
        phone:"5034432",
        registerInfo:"E-R 7:00-21:00",
      },
      {
        name:"Monika Põlluveer",
        phone:"5296626",
        registerInfo:"E-R 7:00-21:00",
      },
      {
        name:"Evelin Kala",
        phone:"56565248",
        registerInfo:"E-R 7:00-21:00",
      },
    )
    this.meesteJuuksurid.push(
      {
        name:"Kaja Zilmer",
        phone:"55563071",
        registerInfo:"E-R 7:00-21:00",
      },
      {
        name:"Merle Pohlak",
        phone:"5222552",
        registerInfo:"E-R 7:00-21:00",
      }
    )
  }
}

interface Juuksur{
  name:String,
  phone:String,
  registerInfo:String,
}
