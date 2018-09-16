import React, { Component } from "react";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      qty: 0
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (id, val) => {
    this.setState({ [id]: val });
  };

  render() {
    const newProduct = this.state;
    return (
      <div>
        <label>Product Name</label>
        <input
          id="productName"
          type="text"
          onChange={e => this.handleOnChange("name", e.target.value)}
        />
        <br />
        <label>Price</label>
        <input
          id="price"
          type="number"
          step="0.01"
          onChange={e => this.handleOnChange("price", e.target.value)}
        />
        <br />
        <label>Qauntity</label>
        <input
          id="qty"
          type="number"
          onChange={e => this.handleOnChange("qty", e.target.value)}
        />
        <button onClick={() => this.props.addNewProduct(newProduct)}>
          Create
        </button>
      </div>
    );
  }
}

export default AddProduct;
