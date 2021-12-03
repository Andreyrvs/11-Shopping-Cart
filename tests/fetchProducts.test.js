require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'

  it('é uma funcão', () => {
    const expected = typeof fetchProducts;
    const atual = 'function';
    expect(expected).toBe(atual);
  });
  it('é chamado ao passar com o argumento "computador" e testa se "fetch" foi chamado', () => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
});
