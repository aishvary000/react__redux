import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [

  {
    id:'p1', price:6,name:'my first book',description:'first book I wrote'
  },
  {
    id:'p2', price:15,name:'my second book',description:'second book I wrote'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => <ProductItem 

          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          
          />)}
      </ul>
    </section>
  );
};

export default Products;
