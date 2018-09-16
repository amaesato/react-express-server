import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AddProduct from "./views/add-product.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      edit: false,
      add: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/store")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  openForm = formName => {
    switch (formName) {
      case "add":
        this.setState({ add: true });
        break;
      case "edit":
        this.setState({ edit: true });
        break;
      default:
        break;
    }
  };

  addNewProduct = newProduct => {
    axios
      .post("/api/store", newProduct)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  };

  handleDelete = sku => {
    axios
      .delete(`/api/store/${sku}`)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { products, add, edit } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Inventory</h1>
          <button onClick={() => this.openForm("add")}>Add new</button>
        </header>
        <div style={{ display: "flex" }}>
          {products &&
            products.map((product, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "grey",
                  margin: "10px",
                  padding: "5px"
                }}
              >
                <p>name: {product.name}</p>
                <p>price: {product.price}</p>
                <p>qauntity: {product.qty}</p>
                <button onClick={() => this.handleDelete(product.sku)}>
                  delete
                </button>
              </div>
            ))}
        </div>
        {add && <AddProduct addNewProduct={this.addNewProduct} />}
        {edit && <h1>this is the edit form</h1>}
      </div>
    );
  }
}

export default App;
