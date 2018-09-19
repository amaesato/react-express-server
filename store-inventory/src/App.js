import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import AddProduct from "./views/add-product.js";
import ProductCard from "./views/product-card.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/store")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

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

  handleEdit = (sku, values) => {
    console.log(sku, values);
    axios
      .put(`/api/store/${sku}`, values)
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { products, edit } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Inventory</h1>
          <h2>Add Product</h2>
          <AddProduct addNewProduct={this.addNewProduct} />
        </header>
        <div className="products-wrapper">
          {products &&
            products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                onDelete={this.handleDelete}
                onEdit={this.handleEdit}
              />
            ))}
        </div>
        {edit && <h1>this is the edit form</h1>}
      </div>
    );
  }
}

export default App;
