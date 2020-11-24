const express = require('express');
const cartsRepo = require('../repositories/carts');

const router = express.Router();

router.post('/cart/products', (req, res) => {
  console.log(req.body.productId);
  
  let cart;
  if (!req.session.cartId) {
    const cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  console.log(cart);
  res.send('Product added to cart');
});

// rcv a GET request to show all items in cart


// rcv post request to delete item from cart

module.exports = router;