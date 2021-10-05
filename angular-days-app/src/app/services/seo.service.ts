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
        this.titleService.setTitle(this.appTitle);

        this.metaTagService.addTags([
            {name: 'robots', content: 'index, follow'},
            {name: 'author', content: 'Martina Kraus'},
        ]);
    }

    setTitle(pokemon?: Pokemon): void {
        const title = pokemon ? `# ${pokemon.id}: ${pokemon.name}` : this.appTitle;
        this.titleService.setTitle(title);
    }

    updateMetaData(pokemon?: Pokemon): void {
        const title = pokemon ? `# ${pokemon.id}: ${pokemon.name}` : this.appTitle;
        const description = pokemon ? `Details of Pokemon # ${pokemon.id}: ${pokemon.name}` : this.appDescription;
        const image = pokemon ? pokemon.imageUrl : '';
        const keywords = pokemon ? `${pokemon.id}: ${pokemon.name}, ${pokemon.types[ 0 ]}, ${pokemon.types[ 1 ]}` : 'Indigo, PokeDex, Angular SEO';

        const tags = [
            {name: 'description', content: description},
            {name: 'keywords', content: keywords},
            {name: 'twitter:card', content: 'summary'},
            {name: 'twitter:image', content: image},
            {name: 'twitter:title', content: title},
            {name: 'twitter:description', content: description},
            {name: 'apple-mobile-web-app-capable', content: 'yes'},
            {name: 'apple-mobile-web-app-status-bar-style', content: 'black translucent'},
            {name: 'apple-mobile-web-app-title', content: title},
            {name: 'apple-touch-startup-image', content: image},
            {name: 'og:title', content: title},
            {name: 'og:description', content: description},
            {name: 'og:image', content: image},
        ];

        tags.forEach(tag => this.metaTagService.updateTag(tag));
    }
}
