import React, { Component } from 'react';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editProduct: {
        name: this.props.product.name,
        price: this.props.product.price,
        qty: this.props.product.qty,
      },
      isEdit: false,
    };
  }

  toggleIsEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  handleOnEdit = (id, val) => {
    this.setState({
      editProduct: { ...this.state.editProduct, [id]: val },
    });
  };

  render() {
    const { product, onDelete, onEdit } = this.props;
    const { isEdit, editProduct } = this.state;
    return (
      <div
        style={{
          backgroundColor: 'grey',
          margin: '1rem',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}
      >
        <p>name: {product.name}</p>
        <p>price: {product.price}</p>
        <p>qauntity: {product.qty}</p>
        <button onClick={() => onDelete(product.sku)}>delete</button>
        <button onClick={() => this.toggleIsEdit()}>edit</button>
        {isEdit && (
          <div>
            <label>Product Name</label>
            <input
              id="productName"
              type="text"
              value={editProduct.name}
              onChange={e => this.handleOnEdit('name', e.target.value)}
            />
            <br />
            <label>Price</label>
            <input
              id="price"
              type="number"
              step="0.01"
              value={editProduct.price}
              onChange={e => this.handleOnEdit('price', e.target.value)}
            />
            <br />
            <label>Qauntity</label>
            <input
              id="qty"
              type="number"
              value={editProduct.qty}
              onChange={e => this.handleOnEdit('qty', e.target.value)}
            />
            <button
              onClick={() => {
                onEdit(product.sku, editProduct);
                this.toggleIsEdit();
              }}
            >
              save
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
