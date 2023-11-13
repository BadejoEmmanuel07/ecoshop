import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

const Productcard = ({ produce }) => {
  return (
    <div className="container card-p">
      <div className="row">
        {produce.map((products, index) => {
          return (
            <div key={index} className="col-md-4 mb-4">
              <Link to={`/products/${products.id}`} className="link-unstyled">
                <div className="card custom-card">
                  <div className="card-img text-center">
                    <LazyLoadImage
                      effect="blur"
                      alt={`Image not loaded`}
                      src={products.images[2]}
                      width={150}
                      height={200}
                      className="img-fluid " style={{borderRadius: "2px", paddingTop:"10px"}}
                    />
                  </div>
                  <div className="card-body text-center">
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="card-title">{products.title}</h5>
                    </div>
                    <div className="card-price">
                      <span>$</span> {products.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productcard;
