import React, { useState, useEffect, useContext } from "react";
// import data from "../data/db.json";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const { name, id } = useParams();
  const { title, price, description, image } = data;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log(data);
      });
    const findProduct = () => {
      const newProduct = data.find((product) => product.name === name);
      setSingleProduct(newProduct);
      console.log(newProduct);
    };
    findProduct();
  }, [name]);
  return (
    <section className="cat-single py-5 bg-ghost-white">
      <div className="container">
        <div className="cat-single-content">
          <div className="section-title">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              {title}
            </h3>
          </div>
          <div className="product-items grid">
            <div className="product-item bg-white">
              <div className="product-item-img ">
                <img src={image} alt="" style={{ width: "25%" }} />
                <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                  {title}
                </div>
              </div>
              <div className="product-item-body">
                <h6 className="product-item-title text-pine-green fw-4 fs-15">
                  {description}
                </h6>
                <div className="product-item-price text-regal-blue fw-7 fs-18">
                  {price}
                </div>
                <button>
                  Add To chart
                  <FontAwesomeIcon size="2x" icon={faCartShopping} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
