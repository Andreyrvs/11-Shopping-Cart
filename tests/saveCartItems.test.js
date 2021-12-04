const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('executa "saveCartItems" com argumento "<ol><li>Item</li></ol>" o método "localStorage.setItem" é chamado ', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('executa "saveCartItems com o argumento "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado com 2 parâmetros. Primeiro "cartitems", segundo o valor passado como argumento para "saveCartItems"', () => {
    saveCartItems('cartitems','<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
