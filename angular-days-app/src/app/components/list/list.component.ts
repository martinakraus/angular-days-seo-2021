import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { SeoService } from '../../services/seo.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.scss' ]
})
export class ListComponent implements OnInit {
    pokemons$!: Observable<Pokemon[]>;

    constructor(private readonly pokeApiService: PokemonApiService, private readonly seo: SeoService) {
    }

    ngOnInit(): void {
        this.pokemons$ = this.pokeApiService.getAll();
        this.seo.updateMetaData();
        this.seo.setTitle();
    }
}

