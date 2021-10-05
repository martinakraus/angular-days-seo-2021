import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';
import { SeoService } from '../../services/seo.service';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: [ './detail.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
    pokemon$!: Observable<Pokemon>;

    constructor(private readonly route: ActivatedRoute,
                private readonly pokeApiService: PokemonApiService,
                private readonly seo: SeoService) {
    }

    ngOnInit(): void {
        this.pokemon$ = this.route.params.pipe(
            map(params => params.id),
            switchMap((id: string) => this.pokeApiService.getById(id)),
            tap((pokemon: Pokemon) => {
                this.seo.updateMetaData(pokemon);
                this.seo.setTitle(pokemon);
            })
        );
    }
}
