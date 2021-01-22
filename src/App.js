import React, { useState } from "react";
import usePassword from "./usePassword";

function ValidPassword({ isValid }) {
  // passwords palyginti password ir paleisti validiate func jei passwordas  lygus
  return isValid ? <p>Password valid!</p> : <p>Password not valid!</p>;
}

function PasswordMatches({ matches }) {
  // passwords palyginti password ir paleisti validiate func jei passwordas  lygus
  return matches ? <p>Password maches!</p> : <p>Password not matches!</p>;
}


export default function App() {
  const [showPass, setShowPass] = useState(false);
  const {
    isValid,
    matches,
    password,
    repeatPassword,
    setPassword,
    setRepeatPassword
} = usePassword({
  validationHandler: (pass)=> pass.length > 3,
  initialPassword: 'ab'
})

  return (
    <>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type={showPass ? "text" : "password"}
      />
      <button onClick={() => setShowPass(!showPass)}>Toggle input type</button>
      <input
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        type="text"
      />
      <ValidPassword isValid={isValid} />
      {isValid && <PasswordMatches matches={matches} />}
    </>
  );
}
