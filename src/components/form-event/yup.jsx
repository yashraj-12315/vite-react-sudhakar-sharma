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
      console.log(formik.errors);
    },
  });

  return (
    <div className="container-fluid">
      <h2>Form Event Demo</h2>
      <p>
        Form events are used to handle user interactions with forms, such as
        submitting data or changing input values.
      </p>
      <form action="" onSubmit={formik.handleSubmit} noValidate>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              minLength={4}
              name="UserName"
              //   onChange={formik.handleChange}
              //   onBlur={formik.handleBlur}
              {...formik.getFieldProps("UserName")}
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.UserName && formik.errors.UserName
              ? formik.errors.UserName
              : null}
          </dd>
          <dt>Email</dt>
          <dd>
            <input
              type="text"
              name="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.Email && formik.errors.Email
              ? formik.errors.Email
              : null}
          </dd>

          <dt>Age</dt>
          <dd>
            <input
              type="number"
              name="Age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.Age && formik.errors.Age ? formik.errors.Age : null}
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
          <dd className="text-danger">
            {formik.touched.Gender && formik.errors.Gender
              ? formik.errors.Gender
              : null}
          </dd>

          <dt>City</dt>
          <dd>
            <select name="City" onChange={formik.handleChange}>
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </dd>
          <dd className="text-danger">
            {formik.touched.City && formik.errors.City
              ? formik.errors.City
              : null}
          </dd>

          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              name="Mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </dd>
          <dd className="text-danger">
            {formik.touched.Mobile && formik.errors.Mobile
              ? formik.errors.Mobile
              : null}
          </dd>
        </dl>
        <button disabled={formik.isValid ? false : true} type="submit">
          Submit
        </button>
        <button
          type="submit"
          style={{ display: formik.dirty ? "inline" : "none" }}
          className="mx-2"
        >
          Save
        </button>

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
