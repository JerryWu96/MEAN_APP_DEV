The first homwork mainly focuses on basic environment setup for Express using WebStorm.

## HTTP Requests

There are two types of HTTP requests that I practiced: <b>GET</b> and <b>POST</b>. 

## Express

As the middleware running on the server side, it serves as a listener and respond to HTTP requests.
In this assignment, i wrote a simple router file: routes/myRouter.js. It will respond to both HTTP requests.

## Postman

By using Postman, it's simpler to simulate a client machine and send coded urls to the localhost server.

GET:  simply visit http://localhost:3000/hw1. You will see the following JSON format:

{

```
"Name": "Xiankang Wu"
```

}

POST: The key for my code is 'input'. 

By selecting POST- Body -  x-www-form-urlencoded, the router will get the parameter from the request body rather than the URL
string.

Then type in a VALUE could be anything. For example, if you type in Foo, and press 'Send', the respond should be:"

{

```
"input": "Foo"
```

}

