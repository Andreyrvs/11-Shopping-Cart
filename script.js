function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// Requisito 01
function createProductItemElement({ id: sku, title: name, thumbnail: image }, callback) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.addEventListener('click', callback);
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
}

// Requisito 02
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 02 - criar o carrinho
const cartOl = document.querySelector('.cart__items');

function addItemCart(event) {
  if (event.target.className === 'item__add') {
    fetchItem(getSkuFromProductItem(event.path[1]))
    .then(({ id, title, price }) => {
      cartOl.appendChild(createCartItemElement({ id, title, price }));
    });  
  }
}

// Requisito 01 - Lista os items no HTML
fetchProducts('computador').then((resposta) => {
  resposta.results.forEach(({ id, title, thumbnail }) => {
    const items = document.querySelector('.items');
    const elementoHTML = createProductItemElement({ id, title, thumbnail }, addItemCart);
    items.appendChild(elementoHTML);
  });
});

window.onload = () => {
  fetchProducts();
  // fetchItem();
};
