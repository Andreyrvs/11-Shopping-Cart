const fetchProducts = () => {
  // seu código aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  return url;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
