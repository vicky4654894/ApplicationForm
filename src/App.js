import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display form details in a pop-up
    alert(JSON.stringify(formData, null, 2));
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      address: '',
    });
  };

  return (
    <div className="heading">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your first name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Enter your last name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Enter your Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Enter your Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </div>
  );
}

export default App;
