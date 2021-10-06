# Add Title and Meta Tags to your application
1. Open the `SeoService` and implement add a function `updateMetaData` giving an optional Parameter with Type `Pokemon`. .
2. Use - if a Pokemon is given - Information like the id, name and/ or the type for a new Page Title and Description Meta Tag.
3. Setting also the Meta Tags `og:title`, `og:description` and `og:image` helps bot to even render preview cards.
4. Inject the `SeoService` inside the `detail.component.ts` and call the function using the `tap`-Operator. 

## Hints

```typescript
updateMetaData(pokemon?: Pokemon): void {
...
const tags = [
    {name: 'description', content: description},
    {name: 'og:title', content: title},
    {name: 'og:description', content: description},
    {name: 'og:image', content: image},
];

tags.forEach(tag => this.metaTagService.updateTag(tag));
}

==== detail.component.ts ====

tap((pokemon: Pokemon) => {
    this.seo.updateMetaData(pokemon);
    this.seo.setTitle(pokemon);
})
```


