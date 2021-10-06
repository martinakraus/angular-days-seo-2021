# Install and run Angular Universal
1. Use the following schematic to install Angular Universal: `ng add @nguniversal/express-engine`
2. Run `npm run build:ssr` to compile your client and server ressources
3. Finally run the node Server with `npm run serve:ssr`
4. Visit you server-side rendered Application on `localhost:4000`

You can check the Page Source to ensure that the HTML was rendered on the server



