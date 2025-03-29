import './App.css';

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert("Registration Successful!");
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div>
          <input 
          type="tel"
          name="phone"
          placeholder='Phone'
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px",margin:"5px 0"}} 
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button type="submit" style={{ padding: "8px 16px", marginTop: "10px" }}>Register</button>
      </form>
    </div>
  );
}

export default App;
