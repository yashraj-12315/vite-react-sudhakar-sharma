export function FormDemo() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    for (var item of formData.entries()) {
      console.log(item);
    }
  }
  return (
    <div className="container-fluid">
      <h2>Form Event Demo</h2>
      <p>
        Form events are used to handle user interactions with forms, such as
        submitting data or changing input values.
      </p>
      <form action="" onSubmit={handleSubmit}>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input type="text" name="Name" />
          </dd>
          <dt>Email</dt>
          <dd>
            <input type="email" name="Email" />
          </dd>
          <dt>Age</dt>
          <dd>
            <input type="number" name="Age" />
          </dd>
          <dt>Gender</dt>
          <dd>
            <input type="radio" name="gender" value="Male" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="Female" id="female" />
            <label htmlFor="female">Female</label>
          </dd>
        </dl>
        <button>Submit</button>
      </form>
    </div>
  );
}
