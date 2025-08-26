const http = require('http');
const { send } = require('process');

let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];


const server = http.createServer((request, response) => {
    console.log(`${request.method} ${request.url}`);

    const sendJSON = (status, data) => {
        response.writeHead(status, {"connect-Type": "application/json"});
        response.end(JSON.stringify(data));
    };

    const urlParts = request.url.split("/");
    const isUserRoute = urlParts[1] === "api" && urlParts[2] === "users";

    if (isUserRoute) {
        if (request.method === "GET" && urlParts.length === 3) {
            return sendJSON(200, users);
        }

        if (request.method === "GET" && urlParts.length === 4) {
            const id = parseInt(urlParts[3]);
            const user = users.find(u => u.id === id);
            if (user) {
                return sendJSON(200, user);
            }
            else {
                return sendJSON(404, {error: "User not found"});
            }
        }

    if (req.method === "GET" && urlParts.length === 3) {
        let body = "";

        request.on("data", chunk => {
            body += chunk.toString();
        });

        request.on("end", () => {
            try {
            const data = JSON.parse(body);

            if (!data.name || !data.email) {
                return sendJSON(400, { error: "Missing name or email" });
            }

            const newUser = {
                id: users.length ? users[users.length - 1].id + 1 : 1,
                name: data.name,
                email: data.email
            };

            users.push(newUser);
            sendJSON(201, newUser);

            } catch (err) {
            sendJSON(400, { error: "Invalid JSON" });
            }
        });
        return;
    }
}


// Default response
  response.writeHead(404, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ error: "Route not found" }));
});

const port = 3000
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

