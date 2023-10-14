import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    countryId: "",
    stateId: "",
    cityId: "",
    language: "",
    confirm_password: "",
    isActive: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formValues]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/i;
    if (!values.fullName) {
      errors.fullName = "FullName is required";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a vlaid email format!";
    }
    if (!values.password) {
      errors.password = "PAssword is required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 character";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">User created Sucessfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>FullName</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formValues.fullName}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={formValues.email}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Enter confirm Password"
              value={formValues.confirm_password}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.confirm_assword}</p>

          <div className="field">
            <label>Country</label>
            <input
              type="text"
              name="Country"
              placeholder="Select Country"
              value={formValues.countryId}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.countryId}</p>

          <div className="field">
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="Select State"
              value={formValues.stateId}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.stateId}</p>

          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Select City"
              value={formValues.city}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.city}</p>

          <div className="field">
            <label>Language</label>
            <input
              type="text"
              name="language"
              placeholder="Select Multiple language"
              value={formValues.language}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.language}</p>

          <div className="field">
            <label>Active</label>
            <input
              type="checkbox"
              name="isActive"
              placeholder="Active"
              value={formValues.isActive}
              onchange={handleChange}
            />
          </div>
          <p>{formErrors.isActive}</p>
        </div>
      </form>
    </div>
  );
};

export default App;
