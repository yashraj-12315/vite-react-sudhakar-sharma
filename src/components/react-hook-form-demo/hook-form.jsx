import { useForm } from "react-hook-form";
export function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => console.log(data);
  return (
    <div>
      <h2>Hook Form Demo</h2>
      <form onSubmit={handleSubmit(submit)}>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              name="Username"
              {...register("Username", { required: true, minLength: 4 })}
            />
          </dd>
          <dd className="text-danger">
            {errors.Username?.type.required === true
              ? "Username is required"
              : null && errors.Username?.type.minLength === true
              ? "Name is too short"
              : null}
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              {...register("Mobile", { required: true, pattern: /\+91\d{10}/ })}
            />
          </dd>
          <dd className="text-danger">
            {errors.Mobile?.type.required === true
              ? "Mobile no is required"
              : null && errors.Mobile?.type.pattern === true
              ? "Invalid Mobile Number"
              : null}
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
