import { useState } from "react";
import axios from "axios";
import '../styles/SignUp.css'
const SignUp = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contact: "",
    email: "",
    password: ""
  });
  const uRL = "http://localhost:8080/customer/registration";
  // Handle form submission
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await axios.post(uRL, userData);
    } catch (error) {
      console.error("Error registering customer:", error);
    }
  };

  // Handle input change
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="signup-container">

      <form onSubmit={handleSubmit} className="signup-form">
        <fieldset>
          <legend>Customer Personal Inforamtaion </legend>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            required
            onChange={handleInputChange}
            placeholder="First Name"
          />

          <input
            type="text"
            name="middleName"
            value={userData.middleName}
            onChange={handleInputChange}
            placeholder="Middle Name"
          />

          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            required
            onChange={handleInputChange}
            placeholder="Last Name"
          />

          <input
            type="text"
            name="contact"
            value={userData.contact}
            required
            onChange={handleInputChange}
            placeholder="Contact"
          />

          <input
            type="text"
            name="email"
            value={userData.email}
            required
            onChange={handleInputChange}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            value={userData.password}
            required
            onChange={handleInputChange}
            placeholder="Password"
          />

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
