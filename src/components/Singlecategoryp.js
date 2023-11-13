import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaShoppingCart } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartProvider, useCart } from "react-use-cart";

const ProductsTemp = ({ productcat }) => {
  const { addItem } = useCart();

  return (
    <div className="container mt-4">
      <div className="row">
        {productcat.map((products, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-img">
                  <div className="img">
                    <LazyLoadImage
                      effect="blur"
                      alt={`Image not loaded`}
                      height={150}
                      src={products.images[2]}
                      width={150}
                    />
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{products.title}</h5>
                  <p className="card-text">{products.description}</p>
                  <p className="discount">{products.discountPercentage}% OFF!</p>
                  <p>Rated {products.rating}</p>
                  <p>{products.stock} Left</p>
                  <p>Brand: {products.brand}</p>
                </div>
                <hr className="card-divider" />
                <div className="card-footer">
                  <div className="card-price">
                    <span>$</span> {products.price}
                  </div>
                  <div>
                    <button className="shop-1" title="Add to Cart" onClick={() => addItem(products)}>
                      Add to Cart <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsTemp;
