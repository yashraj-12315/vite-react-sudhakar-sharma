import { useEffect, useState } from "react";

export function AjaxDemo() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    rating: { rate: 0, ratings: 0, reviews: 0 },
    image: "",
    offers: [],
  });

  function GetProduct() {
    let http = new XMLHttpRequest();
    //configure the request
    http.open("GET", "product.json", true);
    http.send();
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        //JSON.parse is to convert text into Json
        setProduct(JSON.parse(http.responseText));
        // console.log(JSON.parse(http.responseText));
      }
    };
  }

  useEffect(() => {
    GetProduct();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <img src={product.image} width="100%" />
        </div>
        <div className="col-9">
          <div className="fs-4 fw-bold">{product.title}</div>
          <div className="mt-2">
            <span className="badge bg-success text-white rounded">
              {product.rating.rate} <span className="bi bi-star-fill"></span>
            </span>
            <span className="mx-2 text-secondary fs-6 fw-bold">
              {product.rating.ratings.toLocaleString()} ratings &{" "}
              {product.rating.reviews} reviews
            </span>
          </div>
          <div className="mt-2">
            <div className="fs-1 fw-bold">
              {product.price.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
              })}
            </div>
          </div>
          <div className="mt-2">
            <ul className="list-unstyled">
              {product.offers.map((offer, index) => (
                <li className="bi bi-tag-fill text-success my-2" key={index}>
                  {" "}
                  <span className="text-secondary">{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
