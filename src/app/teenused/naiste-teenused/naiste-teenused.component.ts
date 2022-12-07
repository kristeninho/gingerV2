import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naiste-teenused',
  templateUrl: './naiste-teenused.component.html',
  styleUrls: ['./naiste-teenused.component.scss']
})
export class NaisteTeenusedComponent implements OnInit {
  loikusedJaSoengud:Teenus[]=[];
  keemilisedLokid:Teenus[]=[];
  varvimine:Teenus[]=[];
  muudTeenused:Teenus[]=[];
  juusteRavi:Teenus[]=[];
  constructor() { }

  ngOnInit(): void {
    this.generateLoikusedJaSoengud();
    this.generateKeemilisedLokid();
    this.generateVarvimine();
    this.generateMuudTeenused();
    this.generateJuusteRavi();
  }
  generateJuusteRavi() {
    this.juusteRavi.push({
      name:"OLAPLEX hooldus",
      price:"30"
    },
    {
      name:"Juukseravi mask",
      price:"6-10"
    },)
  }
  generateMuudTeenused() {
    this.muudTeenused.push({
      name:"Konsultatsioon 15 min",
      price:"8"
    },)
  }
  generateVarvimine() {
    this.varvimine.push({
      name:"Täielik värvimine (lühikesed juuksed)",
      price:"materjal + 25"
    },
    {
      name:"Täielik värvimine (õlgadeni juuksed)",
      price:"materjal + 18"
    },
    {
      name:"Täielik värvimine (pikad juuksed)",
      price:"materjal + 20"
    },
    {
      name:"Järelkasvu värvimine",
      price:"materjal + 13"
    },
    {
      name:"Salkude värvimine (kilemütsiga)",
      price:"materjal + 18"
    },
    {
      name:"Salkude osaline värvimine fooliumiga",
      price:"materjal + 22"
    },
    {
      name:"Salkude värvimine fooliumiga (kogu pea)",
      price:"materjal + 28"
    },
    {
      name:"Mitmevärviliste salkude värvimine fooliumiga",
      price:"materjal + 28"
    },
    {
      name:"Salkude värvimine fooliumiga ja järelkasv",
      price:"materjal + 35"
    },
    {
      name:"Materjali hind",
      price:"1 gr, 1 ml - 0,4"
    },)
  }
  generateKeemilisedLokid() {
    this.keemilisedLokid.push({
      name:"Lühikesed juuksed",
      price:"materjal + 20"
    },
    {
      name:"Keskmised juuksed ( õlgadeni juuksed)",
      price:"materjal + 25"
    },
    {
      name:"Pikad juuksed",
      price:"materjal + 35"
    },)
  }

  generateLoikusedJaSoengud() {
    this.loikusedJaSoengud.push({
      name:"Tuka modelleerimine",
      price: "10"
    },
    {
      name:"Tuka piiramine",
      price: "7"
    },
    {
      name:"Föönisoeng (pesuga)(lühikesed juuksed)",
      price: "17"
    },
    {
      name:"Föönisoeng (pesuga)(pikad juuksed)",
      price: "23"
    },
    {
      name:"Pidulik soeng lühikesed juuksed",
      price: "25"
    },
    {
      name:"Pidulik soeng õlgadeni juuksed",
      price: "30"
    },
    {
      name:"Pidulik soeng pikad juuksed",
      price: "35"
    },
    {
      name:"Juuste sirgendamine (triikimine)",
      price: "25"
    },
    {
      name:"Tangilokid õlgadeni juuksed",
      price: "25"
    },
    {
      name:"Tangilokid pikad juuksed",
      price: "30-35"
    },
    {
      name:"Patsi punumine",
      price: "25"
    },
    {
      name:"Pruudisoeng",
      price: "50"
    },
    {
      name:"Thera- Cut lõikus (kuumad käärid)",
      price: "35"
    },
    {
      name:"Kuivatamine (lühikesed juuksed)",
      price: "10"
    },
    {
      name:"Kuivatamine (pikad juuksed)",
      price: "15"
    },
    {
      name:"Pesu, lõikus, föönisoeng",
      price: "28-35"
    },
    {
      name:"Stiilimuutus (konsultatsioon, pesu, lõikus, föön)",
      price: "35-40"
    },
    {
      name:"Noorukite lõikus, pesu, föön (vanus kuni 12 a.)",
      price: "15-20"
    },
    )
  }

}

export interface Teenus{
  name:String,
  price:String,
}