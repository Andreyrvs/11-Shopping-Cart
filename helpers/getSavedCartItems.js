const getSavedCartItems = (param) => localStorage.getItem(param);
/* seu código aqui */

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
