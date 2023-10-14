import React, { useState } from "react";
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
  };

  const handleChange=(e)=>{
    const{name, value} = e.target;
    setFormValues({})
  }

  const handleSubmit =(e)=>{
    console.log("work")
  }

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="container">
      {Object.keys(formErrors).length===0 && isSubmit ?(
        <div className="ui message success">User created Sucessfully</div>
      ):(
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
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>

          <div className="field">
            <label>FullName</label>
            <input 
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formValues.fullName}
            onchange={handleChange} />
          </div>
          <p>{formErrors.fullName}</p>








        </div>
      </form>
    </div>
  )
};

export default App;
