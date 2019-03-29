The third assignment utilizes Express, Request, JSON parsing and EJS.

## API

I used New York Times Books API to retrieve the best seller list. Only the top 3 titles of books within the list are displayed. 

For obvious reasons, the key is stored in a file that I listed in the .gitignore: config.js. 

It has a funciton, which is called to use append THE KEY to the end of the url.

```
module.exports = {
    'secret': 'THE KEY'
}
```

Please refer to the following link for details. You may need to register and log in to use this free API.

https://developer.nytimes.com/

## Express

An instance of Express is mounted on the path: <http://localhost:3000/hw3>

Routing is defined in the file: /routes/myRouter.js. 

I used Request package from npm to retrieve data. In default, it uses the GET method.

Also, a back-end render page is used to display the data.

## EJS

To render page on the back-end and display it, I select EJS instead of Pug. The reason is simple: the syntax of EJS is more similar to traditional HTML syntax, and it allows a simple <% … %> to integrate JS code.
