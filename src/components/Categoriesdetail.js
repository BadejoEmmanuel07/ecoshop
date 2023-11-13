import { Link } from "react-router-dom";

const Catcard = ({ Catcard }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {Catcard.map((data, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Link to={`/products/categories/${data}`}>
              <button className="shop-1">{data}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catcard;
