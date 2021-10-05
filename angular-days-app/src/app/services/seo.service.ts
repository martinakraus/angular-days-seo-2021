import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Pokemon } from '../models/Pokemon';

@Injectable({
    providedIn: 'root'
})
export class SeoService {
    private readonly appTitle = 'Martinas PokeDex';
    private readonly appDescription = 'Indigio PokeDex';

    constructor(private readonly metaTagService: Meta, private readonly titleService: Title) {
    }

    initDefaultMetaInformation(): void {
    }

    setTitle(pokemon?: Pokemon): void {

    }

    updateMetaInformationForPage(pokemon?: Pokemon): void {

    }
}
