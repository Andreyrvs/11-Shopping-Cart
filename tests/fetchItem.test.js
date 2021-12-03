require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui!
  // fail('Teste vazio');
  const urlItem = 'https://api.mercadolibre.com/items/MLB1615760527'

  it('é uma função', () => {
    const expected = typeof fetchItem;
    const atual = 'function';

    expect(expected).toEqual(atual);
  });
  it('execute com o argumento do item "MLB1615760527" e teste se "fetch" foi chamada', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalled()
  });
  it('chamar a função com argumento do item "MLB1615760527", testa se "fetch" utiliza o endpoint "urlItem"', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(urlItem);
  })
});
