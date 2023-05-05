import React, { useState } from "react";
import "./Register.css";
import logo from "./logo.png";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [petPreferences, setPetPreferences] = useState({
    dogs: false,
    cats: false,
    bunnies: false,
    fish: false,
    gerbal: false,
    birds: false,
    reptiles: false,
  });
  const [petCharacteristics, setPetCharacteristics] = useState({
    clever: false,
    cute: false,
    independent: false,
    pottyTrained: false,
    kidFriendly: false,
    quiet: false,
    energetic: false,
  });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handlePetPreferencesChange = (e) => {
    const { name, value, checked, type } = e.target;
    setPetPreferences((prevState) => {
      if (type === "checkbox") {
        return { ...prevState, [name]: checked };
      }
      return { ...prevState, [name]: value };
    });
  };
  const handlePetCharacteristicsChange = (e) => {
    const { name, value, checked, type } = e.target;
    setPetCharacteristics((prevState) => {
      if (type === "checkbox") {
        return { ...prevState, [name]: checked };
      }
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(
    //   `Username: ${username} Password: ${password} First Name: ${firstName} Last Name: ${lastName} Age: ${age} Country: ${country} Pet Preferences: ${JSON.stringify(
    //     petPreferences
    //   )}`
    // );
    // // add code to send the login data to the server here
    // let fData = new FormData();
    // fData.append("user", username);
    // fData.append("pass", password);
    // fData.append("fName", firstName);
    // fData.append("lName", lastName);
    // fData.append("age", age);
    // fData.append("country", country);
    // fData.append("petPref", JSON.stringify(petPreferences));
    // fData.append("petChar", JSON.stringify(petCharacteristics));
    // axios({
    //   method: "post",
    //   url: "", // replace '' with server url later
    //   data: fData,
    // })
    //   .then((response) => console.log(response))
    //   .catch((error) => alert(error));
  };

  return (
    <div className="register">
      <div className="register-register">
        <div className="register-overlap-group">
          <div className="register-overlap">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="description">Create Your Account</div>
            <div className="register-form">
              <form
                action="http://localhost:8000/register.php"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    value={age}
                    onChange={handleAgeChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleCountryChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="petPreferences">Pet Preferences</label>
                  <div className="pet-preferences">
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="dogs"
                          checked={petPreferences.dogs}
                          onChange={handlePetPreferencesChange}
                        />
                        Dogs
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="cats"
                          checked={petPreferences.cats}
                          onChange={handlePetPreferencesChange}
                        />
                        Cats
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="bunnies"
                          checked={petPreferences.bunnies}
                          onChange={handlePetPreferencesChange}
                        />
                        Bunnies
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="fish"
                          checked={petPreferences.fish}
                          onChange={handlePetPreferencesChange}
                        />
                        Fish
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="gerbal"
                          checked={petPreferences.gerbal}
                          onChange={handlePetPreferencesChange}
                        />
                        Gerbal
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="birds"
                          checked={petPreferences.birds}
                          onChange={handlePetPreferencesChange}
                        />
                        Birds
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="reptiles"
                          checked={petPreferences.reptiles}
                          onChange={handlePetPreferencesChange}
                        />
                        Reptiles
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="petCharacteristics">
                    Pet Characteristics
                  </label>
                  <div className="pet-characteristics">
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="clever"
                          checked={petCharacteristics.clever}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Clever
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="cute"
                          checked={petCharacteristics.cute}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Cute
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="independent"
                          checked={petCharacteristics.independent}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Independent
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="pottyTrained"
                          checked={petCharacteristics.pottyTrained}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Potty Trained
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="kidFriendly"
                          checked={petCharacteristics.kidFriendly}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Kid Friendly
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="quiet"
                          checked={petCharacteristics.quiet}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Quiet
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="energetic"
                          checked={petCharacteristics.energetic}
                          onChange={handlePetCharacteristicsChange}
                        />
                        Energetic
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="register-btn">
                  Register
                </button>
              </form>
            </div>
          </div>
          <h1 className="register-h-1">Find your cuddle buddy today</h1>
        </div>
      </div>
    </div>
  );
};
export default Register;
