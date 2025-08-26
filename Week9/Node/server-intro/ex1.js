const http = require('http')

const server = http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);
    
    if (request.method === "GET") {
        switch(request.url) {
            case "/":
                response.writeHead(200, {"connect-Type": "text/plain"});
                response.end("Welcome to my server!");
                break;
            
            case "/about":
                response.writeHead(200, {"connect-Type": "text/plain"});
                response.end("This is the about page");
                break;
            
            case "/contact":
                response.writeHead(200, {"connect-Type": "text/plain"});
                response.end("Contact me at: itamar@gmil.com");
                break;
            
            default:
                response.writeHead(400, {"connect-Type": "text/plain"});  
                response.end("404 - Page not found");              

        }
    }
    else {
        response.writeHead(405, {"connect-Type": "text/plain"});
        response.end("405 - method not allowed");
    }
});

// Start the server
const port = 3000
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});