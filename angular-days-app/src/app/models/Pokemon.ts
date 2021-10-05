import { PokemonSingleFetchResult } from './PokemonFetchResult';

export class Pokemon {
    id: number;
    name: string;
    types: string[];
    imageUrl: string;
    weight: number;
    height: number;

    constructor(pokemonSingleFetchResult: PokemonSingleFetchResult) {
        this.id = pokemonSingleFetchResult.id;
        this.name = pokemonSingleFetchResult.name;
        this.types = pokemonSingleFetchResult.types.map(typeItem => typeItem.type.name);
        this.imageUrl = pokemonSingleFetchResult.sprites.front_default;
        this.weight = pokemonSingleFetchResult.weight;
        this.height = pokemonSingleFetchResult.height;
    }
}
