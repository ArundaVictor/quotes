import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes =[
    new Quotes (1, "Everyday is a brand new day", "Victor"),
    new Quotes (2, "Which day", "Chege"),
    new Quotes (3, "Today", "Dami"),
  ]
  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}
