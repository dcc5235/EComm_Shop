const express = require('express');

const router = express.Router();

router.post('/cart/products', (req, res) => {
  console.log(req.body.productId);

  res.send('Product added to cart');
});

// rcv a GET request to show all items in cart

// rcv post request to delete item from cart

module.exports = router;