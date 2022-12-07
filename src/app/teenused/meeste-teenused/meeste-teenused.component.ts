import { Component, OnInit } from '@angular/core';
import { Teenus } from '../naiste-teenused/naiste-teenused.component';

@Component({
  selector: 'app-meeste-teenused',
  templateUrl: './meeste-teenused.component.html',
  styleUrls: ['./meeste-teenused.component.scss']
})
export class MeesteTeenusedComponent implements OnInit {
  meesteTood:Teenus[]=[];
  constructor() { }

  ngOnInit(): void {
    this.generateMeesteTood();
  }
  generateMeesteTood() {
    this.meesteTood.push({
      name:"OLAPLEX hooldus",
      price:"30"
    },
    {
      name:"Juukseravi mask",
      price:"6-10"
    },
    {
      name:"OLAPLEX hooldus",
      price:"30"
    },
    {
      name:"Juukseravi mask",
      price:"6-10"
    },
    {
      name:"OLAPLEX hooldus",
      price:"30"
    },
    {
      name:"Juukseravi mask",
      price:"6-10"
    },
    {
      name:"OLAPLEX hooldus",
      price:"30"
    },)
  }

}
