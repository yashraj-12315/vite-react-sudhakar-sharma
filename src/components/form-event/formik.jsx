import { useFormik } from "formik";
export function Formik() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Email: "",
      Age: 0,
      Gender: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div className="container-fluid">
      <h2>Form Event Demo</h2>
      <p>
        Form events are used to handle user interactions with forms, such as
        submitting data or changing input values.
      </p>
      <form action="" onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" name="UserName" onChange={formik.handleChange} />
          </dd>
          <dt>Email</dt>
          <dd>
            <input type="email" name="Email" onChange={formik.handleChange} />
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="number" name="Age" onChange={formik.handleChange} />
          </dd>
          <dt>Gender</dt>
          <dd>
            <input
              type="radio"
              name="Gender"
              onChange={formik.handleChange}
              value="Male"
              id="male"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="Gender"
              onChange={formik.handleChange}
              value="Female"
              id="female"
            />
            <label htmlFor="female">Female</label>
          </dd>
        </dl>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
