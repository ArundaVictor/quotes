import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes =[
    new Quotes (1, "Everyday is a brand new day", "Victor",new Date(2019,0,14)),
    new Quotes (2, "Which day", "Chege",new Date(2019,0,14)),
    new Quotes (3, "Today", "Dami",new Date(2019,0,14)),
  ]
  deleteQuotes(isComplete,index){
       if (isComplete){
           let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

           if(toDelete){
               this.quotes.splice(index,1)
           }
       }
   }

   addNewQuotes(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.postDate = new Date(quote.postDate)
        this.quotes.push(quote)

    }

  toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}
