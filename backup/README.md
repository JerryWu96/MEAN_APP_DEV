The fourth assignment utilizes Angular for frontend, with the help of routing to display different options. It is a refactor of my previous assignment.

## API

I used New York Times Books API to retrieve the best seller list. Only the top 3 titles of books within the list are displayed. 

For obvious reasons, the key is stored in a file that I listed in the .gitignore: config.js. 

It is a module, which is used to get my API key and then I appendED THE KEY to the end of the url required to send to NYTimes server.

```
module.exports = {
    'secret': 'THE KEY'
}
```

Please refer to the following link for details. You may need to register and log in to use this free API.

https://developer.nytimes.com/

## General idea

Backend: an instance of Express is mounted on the path: <http://localhost:3000/hw4>

Frontend: Angular is mounted on the path: http://localhost:4200

With the help of AppRoutingModule, by pressing two buttons, the page will be redirected to:

Tap Sellers: <http://localhost:4200/books>

User Information: <http://localhost:4200/users>

Routing is defined in the file: /src/app/user.ts. 


