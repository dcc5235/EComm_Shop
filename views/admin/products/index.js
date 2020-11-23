// List of files, images, posts are typically listed as an index
const layout = require('../layout');

module.exports = ({ products }) => {
  const renderedProducts = products.map((product) => {
    return `
      <div>${product.title}</div>
    `;
    })
    .join('');
  
  return layout({
    content: `
      <h1 class="title">Products</h1>
      ${renderedProducts}
    `
  });
};