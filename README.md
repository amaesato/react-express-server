# Steps for creating a simple app with a server using React, Express, and Node

## Initial and Server setup

1. `mkdir react-and-server`
2. `cd react-and-server`
3. `npm init -y`, -y flag skips questions.
4. `npm install --save express body-parser`
5. `touch .gitignore`, add node_modules to that file
6. `mkdir server` -> `touch server/index.js` -> `touch server/controller.js`
7. In index.js, add your requires, use, and listen

```
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

const port = 5000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );
```

8. In controller.js add your initial data

```
let products = [
  { sku: 0, name: 'default', price: 0, qty: 0 }
]
let sku = 0;

module.exports = {

};
```

9. In index.js, require your controller.js `const c = require('./controller.js')`
10. In controller.js add your CRUD methods in the `module.exports` object.
11. In index.js, create your api routes.

```
app.get("/api/store", bc.store);
app.post("/api/store", bc.create);
app.put("/api/store/:sku", bc.update);
app.delete("/api/store/:sku", bc.delete);
```

12. run `nodemon server` -> navigate to `localhost:5000/api/store` -> make sure your default product is displayed.

## React app setup

1. In the root folder of `react-and-server`, run `create-react-app client`.
2. `cd client` -> in package.json add your proxy
3. In App.js add `componentDidMount`
