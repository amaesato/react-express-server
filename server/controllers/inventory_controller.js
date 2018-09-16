let products = [{ sku: 0, name: "default", price: 0, qty: 0 }];
let sku = 0;

module.exports = {
  store: (req, res) => {
    res.status(200).send(products);
  },
  create: (req, res) => {
    const { name, price, qty } = req.body;
    let product = {
      sku: sku++,
      name,
      price,
      qty
    };
    products.push(product);
    res.status(200).send(products);
  },
  update: (req, res) => {
    let index = null;
    products.forEach((product, i) => {
      if (product.sku === Number(req.params.sku)) index = i;
    });
    products[index] = {
      sku: products[index].sku,
      name: req.body.name || products[index].name,
      price: req.body.price || products[index].price,
      qty: req.body.qty || products[index].qty
    };
    res.status(200).send(products);
  },
  delete: (req, res) => {
    let index = null;
    products.forEach((product, i) => {
      if (product.sku === Number(req.params.sku)) index = i;
    });
    products.splice(index, 1);
    res.status(200).send(products);
  }
};
