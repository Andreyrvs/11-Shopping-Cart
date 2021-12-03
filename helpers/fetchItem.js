const API_URL_ITEM = 'https://api.mercadolibre.com/items/';

const fetchItem = async (item) => {
  // seu código aqui
  const url = `${API_URL_ITEM}${item}`;
  const promise = await (await fetch(url)).json();
  console.log(promise);
  return promise;
};

fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
