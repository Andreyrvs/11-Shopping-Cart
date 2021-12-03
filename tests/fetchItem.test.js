require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui!
  // fail('Teste vazio');

  it('é uma função', () => {
    const expected = typeof fetchItem;
    const atual = 'function';

    expect(expected).toEqual(atual);
  });
  it('execute com o argumento do item "MLB1615760527" e teste se "fetch" foi chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalled()
  });
  it('', () => {

  })
});
