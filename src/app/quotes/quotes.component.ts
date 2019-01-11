import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Quotes';
  quotes = "Everyday is a brand new day. Everyday is beautiful"
  constructor() { }

  ngOnInit() {
  }

}
