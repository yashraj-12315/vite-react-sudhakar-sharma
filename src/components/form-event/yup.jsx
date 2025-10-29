import { useFormik } from "formik";
import * as yup from "yup";
export function Yup() {
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Email: "",
      Age: 0,
      Gender: "",
      City: "",
      Mobile: "",
    },
    validationSchema: yup.object({
      UserName: yup
        .string()
        .required("UserName is required")
        .min(4, "Name is too short"),
      Age: yup
        .number("Age must be a number")
        .min(15, "Minimum age is 15")
        .required("Age is required"),
      Mobile: yup
        .string()
        .required("Mobile is required")
        .matches(
          /\+91\d{10}/,
          "Mobile number should be in +91xxxxxxxxxx format"
        ),
      Email: yup.string().email("Invalid Email").required("Email Required"),
    }),
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
          <dd className="text-danger">{formik.errors.UserName}</dd>
          <dt>Email</dt>
          <dd>
            <input type="text" name="Email" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Email}</dd>

          <dt>Age</dt>
          <dd>
            <input type="number" name="Age" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>

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
          <dd className="text-danger">{formik.errors.Gender}</dd>

          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </dd>
          <dd className="text-danger">{formik.errors.City}</dd>

          <dt>Mobile</dt>
          <dd>
            <input type="text" name="Mobile" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Mobile}</dd>
        </dl>
        <button type="submit">Submit</button>

        <h5>Please check the following errors:</h5>
        <ul className="list-unstyled text-danger">
          {Object.keys(formik.errors).map((key) => (
            <li key={key}>{formik.errors[key]}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
