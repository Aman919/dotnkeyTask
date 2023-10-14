import React, { useEffect, useState } from "react";
import "./addUserForm.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const AddUserForm = () => {

    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        countryId: null,
        stateId: null,
        cityId: null,
        language: [],
        confirm_password: "",
        isActive: false,
      };
    
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      //Options for country, state, city
      const countryOptions = [
        { value: "india", label: "India" },
        { value: "canada", label: "Canada" },
        { value: "usa", label: "USA" },
      ];
      const stateOptions = [
        { value: "ny", label: "New York", country: "usa" },
        { value: "ca", label: "California", country: "usa" },
        { value: "up", label: "Uttar Pradesh", country: "India" },
        { value: "blr", label: "Bangalore", country: "India" },
      ];
    
      const cityOptions = [
        { value: "nyc", label: "New York City", state: "ny" },
        { value: "la", label: "Los Angeles", state: "ca" },
        { value: "Allahabad", label: "Allahabad", state: "up" },
        { value: "Hsr", label: "HSR Layout", state: "blr" },
      ];
    
      const languageOptions = [
        { value: "english", label: "English" },
        { value: "spanish", label: "Spanish" },
        { value: "french", label: "French" },
        { value: "hindi", label: "Hindi" },
      ];
    
      const animatedComponents = makeAnimated();
    
      const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    
        if (name==="password"||name==="confirm_password"){
          validatePasswordConfirmation(formValues.password, formValues.confirm_password);
        }
      };
    
      const validatePasswordConfirmation = (password, confirm_password)=>{
        if (password !== confirm_password){
          setFormErrors({...formErrors, confirm_password: "Passwords do not match"});
    
        } else {
          setFormErrors({...formErrors, confirm_password: ""})
        }
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      const handleLanguageChange = (selectedLanguage) => {
        setFormValues({ ...formValues, language: selectedLanguage });
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
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "password must be more than 4 character";
        }
        return errors;
      };
  return (
    <div className="container">
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className="ui message success">User created Sucessfully</div>
    ) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )} */}
    <h1>Manage Customer</h1>
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
            onChange={(e) => {
              handleChange("fullName", e.target.value);
            }}
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
            onChange={(e) => {
              handleChange("email", e.target.value);
            }}
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
            onChange={(e) => {
              handleChange("password", e.target.value);
            }}
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
            onChange={(e)=>handleChange("confirm_password", e.target.value)}
          />
        </div>
        <p>{formErrors.confirm_password}</p>

        <div className="field">
          <label>Country</label>
          <Select
            options={countryOptions}
            value={formValues.countryId}
            onChange={(selected) => handleChange("countryId", selected)}
            isSearchable
          />
        </div>

        <div className="field">
          <label>State</label>
          <Select
            options={stateOptions}
            value={formValues.stateId}
            onChange={(selected) => {
              handleChange("stateId", selected);
            }}
            isSearchable
          />
        </div>

        <div className="field">
          <label>City</label>
          <Select
            options={cityOptions}
            value={formValues.cityId}
            onChange={(selected) => {
              handleChange("cityId", selected);
            }}
            isSearchable
          />
        </div>

        <div className="field">
          <label>Languages</label>
          <Select
            options={languageOptions}
            components={animatedComponents}
            isMulti
            value={formValues.language}
            onChange={handleLanguageChange}
            isSearchable
          />
        </div>

        <div className="field">
          <label>Active</label>
          <input
            type="checkbox"
            name="isActive"
            placeholder="Active"
            checked={formValues.isActive}
            onChange={(e) =>
              setFormValues({ ...formValues, isActive: e.target.checked })
            }
          />
        </div>
        <p>{formErrors.isActive}</p>
        <button className="ui button">Cancel</button>
        <button type="submit" className="ui button">
          Save
        </button>
      </div>
    </form>
  </div>
  );
};

export default AddUserForm

