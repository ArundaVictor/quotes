import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  
  quotes =[
    new Quotes (1, "Everyday is a brand new day", "Everyday is beautiful"),
    new Quotes (2, "Everyday is a brand new day", "Everyday is beautiful"),
    new Quotes (3, "Everyday is a brand new day", "Everyday is beautiful"),
  ]
  constructor() { }

  ngOnInit() {
  }

}
