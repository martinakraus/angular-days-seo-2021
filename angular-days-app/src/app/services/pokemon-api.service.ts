import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../models/Pokemon';
import { PokemonFetchResult, PokemonSingleFetchResult } from '../models/PokemonFetchResult';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PokemonApiService {
    constructor(private readonly http: HttpClient) {
    }

    getAll(): Observable<Pokemon[]> {
        return this.http.get<PokemonFetchResult>(`${environment.apiUrl}?limit=9`).pipe(
            switchMap((response: PokemonFetchResult) =>
                forkJoin(response.results.map((pokemonFetchResult => this.http.get<PokemonSingleFetchResult>(pokemonFetchResult.url)
                    .pipe(
                        map((pokemonSingleFetchResult: PokemonSingleFetchResult) => new Pokemon(pokemonSingleFetchResult))
                    ))))
            )
        );
    }

    getById(id: string): Observable<Pokemon> {
        return this.http.get<PokemonSingleFetchResult>(`${environment.apiUrl}/${id}`).pipe(
            map((pokemonSingleFetchResult: PokemonSingleFetchResult) => new Pokemon(pokemonSingleFetchResult))
        );
    }
}
