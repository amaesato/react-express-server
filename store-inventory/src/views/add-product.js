import React, { Component } from "react";
import "../App.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      qty: 0
    };
  }

  handleOnChange = (id, val) => {
    this.setState({ [id]: val });
  };

  handleReset = () => {
    this.setState({
      name: "",
      price: 0,
      qty: 0
    });
  };

  render() {
    const newProduct = this.state;
    return (
      <div className="form">
        <label>Product Name</label>
        <input
          id="productName"
          type="text"
          value={this.state.name}
          onChange={e => this.handleOnChange("name", e.target.value)}
        />
        <br />
        <label>Price</label>
        <input
          id="price"
          type="number"
          step="0.01"
          value={this.state.price}
          onChange={e => this.handleOnChange("price", e.target.value)}
        />
        <br />
        <label>Qauntity</label>
        <input
          id="qty"
          type="number"
          value={this.state.qty}
          onChange={e => this.handleOnChange("qty", e.target.value)}
        />
        <button
          onClick={() => {
            this.props.addNewProduct(newProduct);
            this.handleReset();
          }}
        >
          Create
        </button>
      </div>
    );
  }
}

export default AddProduct;
