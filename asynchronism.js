console.log("Waitinng connection..."); 
//connecting API server
const https = require('https');
const API = "https://jsonplaceholder.typicode.com/users?_limit=2";
//callback arrow function
https.get(API, res => {
    console.log(`Status code API: ${res.statusCode}`);
});
//running asyncronism   
console.log("Connecting API...");