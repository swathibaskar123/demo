import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IAllProductProps } from "../interface/IProductProps";
const FetchAllProduct: React.FunctionComponent = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data.map(({ id, title, image, price, description }) => (
        <Link to={`/${id}`}>
          <div className="container">
            <div className="row row-col-4">
              <div
                className="card card-shop"
                style={{
                  width: "18rem",
                }}
              >
                <img src={image} className="card-img-top" alt="..." />

                <div className="card-body">
                  <h5 className="card-title card-title card-head ">{title}</h5>
                  {/* <p className="card-text card-text card-content">
                  {description}
                </p> */}
                  <p className="card-text card-text card-subcontent ">
                    Rs.{price}
                  </p>
                </div>
                <button className="btn">
                  Add To Cart
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default FetchAllProduct;
