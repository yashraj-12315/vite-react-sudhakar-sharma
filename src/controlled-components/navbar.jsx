export default function Navbar({ brandName, menuItems, theme, signin }) {
  return (
    <nav
      className={`d-flex ${theme} justify-content-between p-3 align-items-center border border-2`}
    >
      <div>
        <span className="fs-4 fw-bold">{brandName}</span>
      </div>
      <div>
        {menuItems.map((item) => (
          <span key={item} className="mx-4">
            {item}
          </span>
        ))}
      </div>
      <div>
        {signin === true ? (
          <button className="btn btn-danger">Sign In</button>
        ) : null}
      </div>
    </nav>
  );
}
