let espalhaArray = [];

const saveCartItems = (chave, items) => {
  // seu código aqui
  espalhaArray = [...espalhaArray, items];
  return localStorage.setItem(chave, JSON.stringify(espalhaArray));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
