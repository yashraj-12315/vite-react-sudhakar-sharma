import { useFormik } from "formik";
export function Formik() {
  function ValidateUser(formData) {
    var errors = {
      UserName: "",
      Email: "",
      Age: "",
      Gender: "",
      City: "",
      Mobile: "",
    };
    if (formData.UserName.length === 0) {
      errors.UserName = "User Name is required";
    } else {
      if (formData.UserName.length < 5) {
        errors.UserName = "User Name should be minimum 5 characters";
      }
    }

    if (formData.Age.length === 0) {
      errors.Age = "Age is required";
    } else {
      if (isNaN(formData.Age)) {
        errors.Age = "Age should be numeric value";
      } else {
        errors.Age = "";
      }
    }

    if (formData.Gender === "") {
      errors.Gender = "Please select Gender";
    } else {
      errors.Gender = "";
    }

    if (formData.City === "") {
      errors.City = "Please select City";
    } else {
      errors.City = "";
    }

    if (formData.Mobile.match(/\+91\d{10}/)) {
      errors.Mobile = "";
    } else {
      errors.Mobile = "Mobile number should be in +91xxxxxxxxxx format";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      UserName: "",
      Email: "",
      Age: 0,
      Gender: "",
      City: "",
      Mobile: "",
    },
    validate: ValidateUser,
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
            <input type="email" name="Email" onChange={formik.handleChange} />
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
      </form>
    </div>
  );
}
