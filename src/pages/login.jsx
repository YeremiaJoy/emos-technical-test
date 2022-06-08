import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const { values, handleChange } = useForm();

  useEffect(() => {
    const user = localStorage.getItem("loggedUser");
    if (user) nav("/home");
  }, []);

  function handleLogin() {
    localStorage.setItem("loggedUser", JSON.stringify(values));
    nav("/home");
  }

  const isError = {
    email: values.email === "" || !values.email,
    password: values.password === "" || !values.password,
    //regex to validate the email is valid or no
    emailNotValid: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      values?.email
    ),
    passwordNotValid:
      values.password?.length < 10 || values.password?.length > 15,
  };

  return (
    <div className="login">
      <div style={{ textAlign: "center", fontWeight: 700 }}>Halaman Login</div>
      <div className="form">
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="input your email"
          value={values.email || ""}
          onChange={handleChange}
        />
        {isError.email ? (
          <div className="red">please input email</div>
        ) : (
          isError.emailNotValid && (
            <div className="red">please input valid email</div>
          )
        )}
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="input your password"
          value={values.password || ""}
          onChange={handleChange}
        />
        {isError.password ? (
          <div className="red">please input password</div>
        ) : (
          isError.passwordNotValid && (
            <div className="red">
              please input password between 10-15 length
            </div>
          )
        )}
        <button
          onClick={handleLogin}
          disabled={
            isError.email ||
            isError.password ||
            isError.emailNotValid ||
            isError.passwordNotValid
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;

function useForm() {
  const [values, setValues] = useState({});

  function handleChange(e) {
    e.preventDefault();

    setValues((values) => ({ ...values, [e.target.name]: e.target.value }));
  }
  return {
    values,
    handleChange,
  };
}
