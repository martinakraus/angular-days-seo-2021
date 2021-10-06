# Prerendering Routes
1. Open your `angular.json` and add scroll to `prerender` configuration
2. Add following routes for prerendering:
   1. `/pokemon/6`
   2. `/pokemon/9`
3. Run `npm run prerender`  to compile your client and server ressources and additional prerendering the routes
4. Run the node Server again with `npm run serve:ssr`

### Hints

```
"prerender": {
    "builder": "@nguniversal/builders:prerender",
    "options": {
      "routes": [
        "/pokemon/6",
        "/pokemon/9"
      ]
    },
  ...
}
```




