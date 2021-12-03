require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');

  it('é uma funcão', () => {
    const expected = typeof fetchProducts;
    const atual = 'function'
    expect(expected).toBe(atual)
  })
});
