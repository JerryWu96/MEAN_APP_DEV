The fifth assignment utilizes Angular for frontend based on HW4. With the help of OAuth and Passport, it is relatively easier to help developers simply authentication process.

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

Backend: an instance of Express is mounted on the path: <http://localhost:3000/>

Frontend: Angular is mounted on the path: http://localhost:4200

The passport-setup.js implements the serialization/deserializarion of users and initialization of Passport.js.

The auth-routes.js sets up the callback route for google to redirect to (here it redirects to the frontend domain)

With the help of AppRoutingModule, by pressing two buttons, the page will be redirected to:

Tap Sellers: <http://localhost:4200/books>

User Information: <http://localhost:4200/users>

## Database

I used Mongoose to connect to a cluster remotely configured using MongoDB Atlas cloud service. a dbURL connection string is used to help build up the connection.

Every time a user is logged in via Google+ API, a User object will be generated follwing the userScheme defined in ./models/user-model.js. Two properties are picked from the profile data returned by Google, and stored in the database:

```
username: String,
googleId: String,
```

## Reference

Special thanks to [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) Youtube channel for providing extra insights into Passport.js.