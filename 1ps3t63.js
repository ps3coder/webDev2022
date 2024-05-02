const http = require('http');
// using const module
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 res.end(`<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=, initial-scale=1.0">
     <title>Pseudo Selctor and more designing</title>
     <style>
         .container
         {
             border: 2px solid red;
             background-color: bisque;
             padding: 34px;
             margin: 34px auto;
             width: 666px;
         }
         a{
             text-decoration: none;
             color: black;
         }
         a:hover
         {
             color: rgb(100, 28, 28);
             background-color: green;
         }
         a:visited
         {
           color: yellow;
         }
         a:active
         {
             color: darkblue;
             background-color: brown;
         }
         .btn
         {
             background : red;
             padding: 6px;
             border: none;
             cursor: pointer;
             font-size: 13px;
             border-radius: 4px;
 
         }
 
     </style>
 </head>
 <body>
     <div class="container" id="cont1">
         <h3>This is my heading</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit in velit omnis eaque vel, deleniti fugiat quos assumenda aperiam nobis tempore sit illum nisi ipsam inventore? Ipsum saepe veritatis quisquam porro.
 
         </p>
         <a href="https://google.com" class="btn">Read more</a>
         <button class="btn">Contact us</button>
     </div>
 </body>
 </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});