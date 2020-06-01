# Simple Node.js Program

This is an example of a simple node program example referenced in the corresponding **Node.js & Express tutorial slides**.

## Start the project from scratch

Navigate to desired location on your computer using your console:
```bash
mkdir node-example
cd node-example
touch index.js
```

Create a simple program in index.js:
```javascript
//index.js
const message = "Hello World";
console.log(message);
```


## Download the completed project

Clone repository from GitHub by running the following in your console:

```bash
git clone https://github.com/ashleighmm/node-example.git
```

### Installation

Once you've downloaded or cloned the ***node-example*** project, ensure you are in the correct directory:

```bash
cd node-example
```

Install node dependencies (this uses the already configured package.json file):

```bash
npm install
```

## Usage

Change the code if you'd like it to output a different message to the console:
```javascript
const message = "Hello World!";
console.log(message);
```

Run the program in your console:

```bash
node index.js
```

You should see your message in your console.