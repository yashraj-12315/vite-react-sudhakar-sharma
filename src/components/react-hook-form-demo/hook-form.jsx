import { useForm } from "react-hook-form";
import Navbar from "../../controlled-components/navbar";

export function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);

  return (
    <div className="container-fluid mt-4">
      <header>
        <Navbar
          signin={false}
          brandName="Shopper."
          menuItems={["Home", "Shop", "Pages", "Blogs", "Docs"]}
          theme="bg-dark text-white"
        />
      </header>
      <h2 className="mb-4">Hook Form Demo</h2>

      <form onSubmit={handleSubmit(submit)}>
        {/* USERNAME FIELD */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            className={`form-control ${errors.Username ? "is-invalid" : ""}`}
            placeholder="Enter username"
            {...register("Username", { required: true, minLength: 4 })}
          />
          {errors.Username?.type === "required" && (
            <span className="text-danger">Username is required</span>
          )}
          {errors.Username?.type === "minLength" && (
            <span className="text-danger">Name is too short (min 4 chars)</span>
          )}
        </div>

        {/* MOBILE FIELD */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Mobile</label>
          <input
            type="text"
            className={`form-control ${errors.Mobile ? "is-invalid" : ""}`}
            placeholder="(+911234567890)"
            {...register("Mobile", {
              required: true,
              pattern: /^\+91\d{10}$/,
            })}
          />
          {errors.Mobile?.type === "required" && (
            <span className="text-danger">Mobile no is required</span>
          )}
          {errors.Mobile?.type === "pattern" && (
            <span className="text-danger">
              Invalid Mobile Number (must start with +91)
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
