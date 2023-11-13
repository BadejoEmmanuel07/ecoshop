import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Search() {
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const FetchProducts = async (inputValue) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${inputValue}`
      );
      if (!response.ok) throw new Error("Something went wrong");
      const data = await response.json();
      setProducts(data.products);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const clickButton = () => {
    FetchProducts(search);
  };

  return (
    <div className="search-comp container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Search"
          onChange={handleSearch}
        />
        <button
          className="shop-1"
          type="button"
          onClick={clickButton}
        >
          Search
        </button>
      </div>

      {error !== "" ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <LazyLoadImage
                  effect="blur"
                  alt={`Image not loaded`}
                  src={product.images[2]}
                  className="card-img-top"
                  style={{ borderRadius: "2px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">$ {product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
