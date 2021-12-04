const saveCartItems = (items, argumento) => 
  // seu código aqui
  localStorage.setItem(items, argumento);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
