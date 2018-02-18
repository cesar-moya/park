import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //selectedHero : Hero;
  heroes : Hero[];

  constructor(private heroService : HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelect(hero : Hero) : void{
  //   //this.selectedHero = hero;
  //   console.log(hero);
  // }

  getHeroes():void{
    console.log("inside get heroes on component");
    this.heroService.getHeroes()
        .subscribe(
            heroes => {
              //console.log("test");
              this.heroes = heroes;
              //console.log("heroes: " + this.heroes[0].name);
            }
        );
    
    //this.heroes = this.heroService.getHeroes();
  }

  

}
