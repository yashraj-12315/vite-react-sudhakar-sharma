import axios from "axios";
import { useEffect, useRef, useState } from "react";

export function CarouselDemo() {
  const [product, setProduct] = useState({
    id: 0,
    title: "",
    price: 0,
    category: "",
    image: "",
    description: "",
    rating: { rate: 0, count: 0 },
  });
  const [status, setStatus] = useState("Slide Show- Manual");

  let productId = useRef(1);
  let thread = useRef(null);

  function LoadProduct(id) {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }

  useEffect(() => {
    LoadProduct(1);
  }, []);

  function loadProductAuto() {
    productId.current = productId.current + 1;
    LoadProduct(productId.current);
  }
  function handleNextClick() {
    productId.current = productId.current + 1;
    LoadProduct(productId.current);
    setStatus("Slide Show - Manual");
  }

  function handlePrevClick() {
    productId.current = productId.current - 1;
    LoadProduct(productId.current);
    setStatus("Slide Show - Manual");
  }

  function handleSliderChange(e) {
    productId.current = e.target.value;
    LoadProduct(productId.current);
    setStatus("Slide Show - Manual");
  }

  function handlePlayClick() {
    thread.current = setInterval(loadProductAuto, 5000);
    setStatus("Slide Show - Running");
  }

  function handlePauseClick() {
    clearInterval(thread.current);
    setStatus("Slide Show - Paused");
  }
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card mt-4 w-50">
        <div className="card-header text-center" style={{ height: "70px" }}>
          <div>{product.title}</div>
          <div className="fw-bold mt-2">({status})</div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button
                onClick={handlePrevClick}
                className="bi bi-chevron-left btn btn-dark"
              ></button>
            </div>
            <div className="col-10 position-relative">
              <div className="badge fs-5 bg-danger text-white rounded rounded-circle position-absolute top-0 end-0">
                {product.price.toLocaleString("en-in", {
                  style: "currency",
                  currency: "INR",
                })}
              </div>
              <img width="100%" height={300} src={product.image} />
              <div className="mt-2">
                <input
                  type="range"
                  value={productId.current}
                  className="form-range"
                  min={1}
                  max={20}
                  onChange={handleSliderChange}
                />
              </div>
            </div>
            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
              <button
                onClick={handleNextClick}
                className="bi bi-chevron-right btn btn-dark"
              ></button>
            </div>
          </div>
        </div>

        <div className="card-footer text-center">
          <button
            className="btn btn-success bi bi-play mx-2"
            onClick={handlePlayClick}
          ></button>
          <button
            className="btn btn-danger bi bi-pause"
            onClick={handlePauseClick}
          ></button>
        </div>
      </div>
    </div>
  );
}
