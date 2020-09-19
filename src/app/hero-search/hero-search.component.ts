import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor() { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
  }

}
