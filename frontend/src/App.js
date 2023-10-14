import React from "react";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";

const App = () => {
  return (
    <div className="App">
      <h1>Manage Customers</h1>
      <button> Add New Customer</button>
      <AddUserForm />
      <UserTable />
    </div>
  );
};

export default App;
