import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {}

  save(): void {}

}
