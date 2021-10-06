# Add Title and Meta Tags to your application
1. Open the `SeoService` and inject the `Meta`-Service and `Title`-Service.
2. Use the `Title`-Service to set an initial App Title.
3. Use the `Meta`-Service to set the `author` and the `Description` Meta-Tag.
4. Inject the `SeoService` inside the `app.component.ts` and call both function inside `ngOnInit`. 

## Hints

```typescript
constructor(private readonly metaTagService: Meta, private readonly titleService: Title) {
}

======
this.titleService.setTitle('Your App Title');

=====
this.metaTagService.addTags([
    {name: 'author', content: 'YOUR NAME'},
    { ... }
]);
=====
```


