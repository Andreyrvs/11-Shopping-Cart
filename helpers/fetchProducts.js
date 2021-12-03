const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (param) => {
  // seu código aqui
  const url = `${API_URL}${param}`;

  const promise = await (await fetch(url)).json();
  console.log(promise);

  return promise;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
