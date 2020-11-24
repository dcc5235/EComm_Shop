const express = require('express');
const cartsRepo = require('../carts');

const router = express.Router();

router.post('/cart/products', (req, res) => {
  console.log(req.body.productId);

  if (!req.session.cartId) {
    const cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    const cart = await cartsRepo.getOne(req.session.cartId);
  }

  res.send('Product added to cart');
});

// rcv a GET request to show all items in cart


// rcv post request to delete item from cart

module.exports = router;