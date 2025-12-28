import "./login.css";
import useCaptcha from "../../hooks/captcha.jsx";
import useFetchData from "../../hooks/fetch-data.jsx";
export function Login() {
  let code = useCaptcha();
  let categories = useFetchData(`https://fakestoreapi.com/products/categories`);
  return (
    <form className="form-background">
      <h3>User Login</h3>
      <dl>
        <dt>User Name</dt>
        <dd>
          <input type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" />
        </dd>

        <dt>Verify Code</dt>
        <dd>{code}</dd>
      </dl>
      <button>Login</button>
      <ul>
        {categories.map((cat, idx) => {
          return <li key={idx}>{cat}</li>;
        })}
      </ul>
    </form>
  );
}
