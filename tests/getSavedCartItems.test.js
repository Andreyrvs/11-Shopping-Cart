const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('executar "getSavedCartItems", o método "localStorage.getItem" é chamado;', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('executar "getSavedCartItems", o método "localStorage.getItem" é chamado com o "cartItems" como parâmetro', () => {
    getSavedCartItems('cartitems')
    expect(localStorage.getItem).toHaveBeenCalled()
  })
});
