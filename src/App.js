import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const [email, setEmail] = useState("");
  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const [gender, setGender] = useState("");
  const genderChange = (e) => {
    setGender(e.target.value);
  };

  const [dob, setDob] = useState("");
  const dobChange = (e) => {
    setDob(e.target.value);
  };

  const [address, setAddress] = useState("");
  const addressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, password, confirmPassword, gender, dob, address,});
     setName("");
     setEmail("");
     setPassword("");
     setConfirmPassword("");
     setGender("");
     setDob("");
     setAddress("");
  };

  return (
    <div className="formfield">
      <h1>This is a Basic Form</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Basic Information</legend>
          <label className="input_label">Enter your Name:</label>
          <input className="inputbox" type="text" placeholder="Enter your name" onChange={nameChange} value={name} required />

          <label className="input_label">Enter your Email:</label>
          <input className="inputbox" type="email" placeholder="Enter your Email" onChange={emailChange} value={email}required/>

          <label className="input_label">Enter your Password:</label>
          <input className="inputbox" type="password" placeholder="" onChange={passwordChange} value={password} required/>

          <label className="input_label">Confirm your Password:</label>
          <input className="inputbox" type="password" placeholder="" onChange={confirmPasswordChange} value={confirmPassword} required />

          <div className="gender_box">
            <p className="input_label">Choose your Gender:</p>
            <input className="radio" type="radio" value="Male" name="gender" id="male" onChange={genderChange} checked={gender === "Male"}/>
            <label htmlFor="male">Male </label>
            <br />
            <input className="radio" type="radio" value="Female" name="gender" id="female" onChange={genderChange} checked={gender === "Female"}/>
            <label htmlFor="female">Female </label>
            <br />
            <input className="radio" type="radio" value="Other" name="gender" id="other" onChange={genderChange} checked={gender === "Other"} />
            <label htmlFor="other"> Other </label>
            <br />
          </div>

          <label className="input_label">Enter your DOB:</label>
          <input
            className="inputbox"
            type="date"
            placeholder="Enter your DOB"
            onChange={dobChange}
            value={dob}
            required="dob"
          />
          <br />

          <label className="input_label">Enter your Address:</label>
          <br />
          <textarea className="inputbox" onChange={addressChange} value={address} required ></textarea>
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
