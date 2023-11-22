import React from 'react';

function List({ list }) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {list.map((item, index) => {
        return (
          <div key={index} className="card m-4" style={{ width: '18rem' }}>
            <img src={item.images[2]} className="card-img-top" alt="Product" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">
                <small className="text-muted">Price: {item.price}</small>
              </p>
              <button className="btn btn-primary">More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
