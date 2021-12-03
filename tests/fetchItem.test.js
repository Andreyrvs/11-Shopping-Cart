require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui!
  // fail('Teste vazio');

  it('é uma função', () => {
    const expected = typeof fetchItem()
    const atual = 'function'

    expect(expected).toBe(atual)
  })
});
