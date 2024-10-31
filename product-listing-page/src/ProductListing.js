import React from 'react';

const products = [
  {
    id: 1,
    category: 'Indoor Plants',
    name: 'Fiddle Leaf Fig',
    price: 30,
    image: 'https://www.ugaoo.com/cdn/shop/files/1_cc65c975-7a6f-43d6-bb81-b56520e29bc7.jpg?v=1717308876&width=1500'
  },
  {
    id: 2,
    category: 'Indoor Plants',
    name: 'Snake Plant',
    price: 25,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nx480cvGoI9Po_hjVkjFUqyzJFHkrzaZew&s'
  },
  {
    id: 3,
    category: 'Succulents',
    name: 'Aloe Vera',
    price: 15,
    image: 'https://www.researchgate.net/publication/233818204/figure/fig1/AS:299970117816324@1448529857495/Diagrammatic-Representation-of-Aloe-vera.png'
  },
  {
    id: 4,
    category: 'Succulents',
    name: 'Echeveria',
    price: 10,
    image: 'https://unlimitedgreens.com/cdn/shop/files/S26.jpg?v=1698320791'
  },
  {
    id: 5,
    category: 'Flowering Plants',
    name: 'Peace Lily',
    price: 20,
    image: 'https://media.houseandgarden.co.uk/photos/64677ebe23689cbbe1bbad8f/1:1/w_2859,h_2859,c_limit/492766473'
  },
  {
    id: 6,
    category: 'Flowering Plants',
    name: 'Orchid',
    price: 40,
    image: 'https://figvinefloralstudio.com/cdn/shop/products/Phalaenopsis005_1200x.jpg?v=1674452847'
  }
];

const ProductListing = ({ addToCart }) => {
  const groupedProducts = products.reduce((acc, product) => {
    const { category } = product;
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="product-listing">
      {Object.keys(groupedProducts).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-category">
            {groupedProducts[category].map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
