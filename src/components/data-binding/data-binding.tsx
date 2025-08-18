import { use, useState } from "react";
import "./data-binding.css";
export function DataBinding() {
  //   const [price] = useState(450000);
  // const [effect] = useState('text-style')
  //   const [stock] = useState(true);
  // const [price] =useState(20);

  // const [categories] = useState(["All", "Electronics", "Fashion", "Footwear"]);

  const [product] = useState({
    Name: "Samsung",
    Price: 50000,
    Stock: true,
    Cities: ["Delhi", "Patna", "Kolkata"],
    Rating: { Rate: 4.2, Count: 500 },
  });
  return (
    <div>
      {/* <h3>Data Binding: {(stock===true)?"Available":"Not in the Stock"} </h3> */}
      {/* <h2 className={`bg-style ${effect}`}>Data Binding </h2> */}
      {/* <p>Price:{price.toLocaleString('en-IN',{style:'currency',currency:'INR'})}</p> */}
      {/* <p>Price:{price.toLocaleString("en-IN", { notation: "compact" })}</p>
      <input type="text" value={price} /> */}

      {/* <header>
        <span>Shopping</span>
        {sessionStorage.getItem("uname") === null ? (
          <button>SignIn</button>
        ) : (
          <span>
            {sessionStorage.getItem("uname")}
            <button>Signout</button>
          </span>
        )}
      </header> */}

      {/* <p>{price ? "Price =" + price : "Price is not defined"}</p> */}

      {/* <h3>Categories</h3>
      <ol>
        {categories.map(function (category) {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      <h3>Choose category</h3>
      <select>
        {categories.map((category, index) => {
          return <option key={index}>{category}</option>;
        })}
      </select>

      <h3>Shopping</h3>
      <nav>
        {categories.map((category, index) => (
          <a href="#" key={index}>
            {category}
          </a>
        ))}
      </nav> */}

      <h3>Product Details</h3>
      <dl>
        <dt>Name</dt>
        <dd>{product.Name}</dd>
        <dt>Price</dt>
        <dd>
          {product.Price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </dd>
        <dt>Stock</dt>
        <dd>{product.Stock === true ? "Available" : "Not in Stock"}</dd>

        <dt>Cities</dt>
        <dd>
          <ul>
            {product.Cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </dd>

        <dt>Rating</dt>
        <dd>
          {product.Rating.Rate} [{product.Rating.Count}]
        </dd>
      </dl>
    </div>
  );
}
