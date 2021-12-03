const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (param) => {
  // seu código aqui
  const url = `${API_URL}${param}`;

  const promise = await fetch(url)
  .then((response) => response.json())
  .then((objJson) => objJson.results)
  .catch((error) => error.toString());
  
  return promise;
};

fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
