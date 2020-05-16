# first-node-express
Initial node.js express server.

# Check your versions of npm and node: 
    $ npm -v
    $ node -v

# Install if necessary:
    (with homebrew)
    $ brew install node 
    (npm will be installed with node)

# Create project folder and cd into it:
    $ mkdir my-project
    $ cd my-project

# Set up a new (or existing) npm package:
    $ npm init
    - enter through the questions
    - creates package.json file

# Use package manager "npm" to install dependencies and add more functionality:

# Install express (web framework):
    $ npm install express

# In a node project, all your dependencies are stored in the "node_modules" folder.

# Unless you changed it, inside "package.json" it will show "main":index.js,
    so we need to create an index.js file. This is where we create our node express server.

# How to create express server inside index.js:

    **Import express framework: inside index.js :
        $ const express = require('express')
        - This imports the library from the node module.
    
    **Create express application:
        $ const app = express()

    **Create get handler:
        $ app.get('/',(req, res, next) => {
        $    res.send('Hello!')
        $ })

    **Connect to the app server:
        $ app.listen(3000)
        - common port numbers include (3000, 5000, 8000, 8080)

# Run the server in the terminal using "node":
    - Make sure you are in the project's root folder:
        $ node index.js

# Confirm the server is running:
    - Open a browser window and in the url bar:
        $ localhost:3000
    - In the browser window, you should see "Hello!"


