# Mini Node Server

This is an example of a mini node server using HTTP modules referenced in the corresponding **Node.js & Express tutorial slides**.

## Start the project from scratch

Navigate to desired location on your computer using your console:
```bash
mkdir mini-node-server​
cd mini-node-server​
touch server.js​
```

Configure your server in server.js:
```javascript
// server.js​

const http = require('http');​
// create a server​
const server = http.createServer((request, response) => {​

    // respond with a 200 status if it works​
    response.writeHead(200);​

    // respond with text if it works​

    response.end('The server is running');​
});​
// listen for the server in port 3000​
server.listen(3000);​
console.log('Server address: http://localhost:3000');​
```

Initialise a node project, which creates the package.json file
```bash
npm init
```

## Download the completed project

Clone repository from GitHub by running the following in your console:

```bash
git clone https://github.com/ashleighmm/node-example.git
```

### Installation

Once you've downloaded or cloned the ***mini-node-server*** project, ensure you are in the correct directory:

```bash
cd mini-node-server
```

Install node dependencies (this uses the already configured package.json file):

```bash
npm install
```

## Usage

Run the program in your console:

```bash
npm start
```

Navigate to ​http://localhost:3000​ in your browser. ​

The browser displays the response from ​your server.js file: ​‘The server is running’.