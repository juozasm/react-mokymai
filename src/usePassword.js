import { useState, useEffect } from "react";

function validate(pass) {
    // const [valid, setValid] = useState()
    // length > 6
    return pass.length > 6;
  }
  

const sillyPassword = ["abc123456", "asdf12345678", "password1234"];

const isSillyPassword = (password) => {
  return sillyPassword.includes(password);
};

export default function usePassword({
    validationHandler = validate,
    initialPassword = ''
} = {}){

    const [password, setPassword] = useState(initialPassword);
    const [repeatPassword, setRepeatPassword] = useState("");
  
    const isValid = validationHandler(password);
    const matches = password === repeatPassword;
  
    useEffect(() => {
      const isSilly = isSillyPassword(password);
      if (isValid && matches && !isSilly) {
        alert("All good");
      }
      if (isSilly) {
        alert("Silly password");
        setPassword("");
        setRepeatPassword("");
      }
    }, [isValid, matches, password]);

    return {
        isValid,
        matches,
        password,
        repeatPassword,
        setPassword,
        setRepeatPassword
    }
}