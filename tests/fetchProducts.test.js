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

  it('ao passar com o argumento "computador" e testa se "fetch" foi chamado', () => {
    // Falso Positivo?
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });

  it('ao passar com o argumento "computador", a função fetch utiliza o endpoint "url"', () => {
    fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('retorno da fetchProducts com argumento "computador" é igual ao objeto "computadorSearch" importado no arquivo', async () => {
    const expected = await fetchProducts('computador');
    const atual = computadorSearch;
    
    expect(expected).toEqual(atual)
  });
  
  it('sem argumento retorna um erro com a mensagem: You must provide an url', async () => {
    const expected = await fetchProducts()
    const atual = new Error('You must provide an url')
    expect(expected).toEqual(atual)
  })

});
