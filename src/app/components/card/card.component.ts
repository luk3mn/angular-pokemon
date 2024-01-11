import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData = { // it's necessary to init theses properties
    id:0,
    name:'',
    sprites: {
      front_default: ''
    },
    types:[]
  }
  name: string = "BULBASSAUR"

  constructor(
    private service: PokemonService
  ) { 

   }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string) {

    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types  
        }
      },
      // error: (err) => console.log(err)
    })
  }

}
