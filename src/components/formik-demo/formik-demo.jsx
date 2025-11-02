import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export function FormikDemo() {
  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      {/* <Formik
        initialValues={{ UserName: "", Age: 0 }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .required("UserName is required")
            .min(4, "Name is too short"),
          Age: yup
            .number("Age must be a number")
            .min(15, "Minimum age is 15")
            .required("Age is required"),
        })}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        <Form>
          <dl>
            <dt>User Name</dt>
            <dd>
              <Field type="text" name="UserName" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="UserName" />
            </dd>
            <dt>Age</dt>
            <dd>
              <Field type="number" name="Age" />
            </dd>
            <dd className="text-danger">
              <ErrorMessage name="Age" />
            </dd>
          </dl>
          <button type="submit">Submit</button>
        </Form>
      </Formik> */}
      <Formik
        initialValues={{ UserName: "", Age: 0 }}
        validationSchema={yup.object({
          UserName: yup
            .string()
            .required("UserName is required")
            .min(4, "Name is too short"),
          Age: yup
            .number("Age must be a number")
            .min(15, "Minimum age is 15")
            .required("Age is required"),
        })}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {(form) => (
          <Form>
            <dl>
              <dt>User Name</dt>
              <dd>
                <Field type="text" name="UserName" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="UserName" />
              </dd>
              <dt>Age</dt>
              <dd>
                <Field type="number" name="Age" />
              </dd>
              <dd className="text-danger">
                <ErrorMessage name="Age" />
              </dd>
            </dl>
            <button disabled={form.isValid ? false : true} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
