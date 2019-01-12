## Heroku Deployment

The deployed project resides at this link: https://murmuring-fortress-60967.herokuapp.com/

## Deploy on local computer  
The following command runs both the frontend and backend server, allowing you to have an easier time coding. 
*Every time you pull please run npm install*
```
npm install
npm run build
```

## Proxy
We utilize a proxy to help us attach the frontend and backend. This is only for dev purposes.
The proxy file can be found in /client/src/setupProxy.js
To add any more proxies use the following snippet of code:
```
app.use(proxy('/api/*', { target: http://localhost:5000}))
```
