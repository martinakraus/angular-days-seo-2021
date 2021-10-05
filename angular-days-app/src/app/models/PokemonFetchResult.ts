export interface PokemonFetchResult {
    count: number;
    next: string;
    previous?: any;
    results: UrlInfo[];
}

export interface PokemonSingleFetchResult {
    abilities: Ability[];
    base_experience: number;
    forms: any[];
    game_indices: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_types: any[];
    species: any;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

export interface Ability {
    ability: UrlInfo;
    is_hidden: boolean;
    slot: number;
}

export interface UrlInfo {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: any;
    versions: any;
}

export interface UrlInfo {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: UrlInfo;
}


export interface Type {
    slot: number;
    type: UrlInfo;
}





