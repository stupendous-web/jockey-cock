import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        process.env.NODE_ENV === "development"
          ? "http://localhost:8000/register"
          : "https://api/jockeycock.com/register",
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        }
      )
      .then(() => {
        router.replace("/app/dashboard");
      })
      .catch((error) => {
        console.log(error);
        const errors = error?.response?.data?.errors;
        setEmailError(!!errors?.email?.length && errors?.email[0]);
        setPasswordError(!!errors?.password?.length && errors?.password[0]);
      });
  };

  return (
    <>
      <div
        className={"uk-section"}
        data-uk-height-viewport={"offset-top: true; offset-bottom: true"}
      >
        <div className={"uk-container uk-container-xsmall"}>
          <form onSubmit={(event) => handleSubmit(event)}>
            <h1>Create your Profile</h1>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Name</label>
              <input
                type={"text"}
                value={name}
                className={"uk-input"}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Email</label>
              <input
                type={"email"}
                value={email}
                className={"uk-input"}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            {emailError && (
              <div className={"uk-alert-danger"} data-uk-alert={""}>
                <p>{emailError}</p>
              </div>
            )}
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Password</label>
              <input
                type={"password"}
                value={password}
                className={"uk-input"}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className={"uk-margin"}>
              <label className={"uk-form-label"}>Password Confirmation</label>
              <input
                type={"password"}
                value={passwordConfirmation}
                className={"uk-input"}
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
                required
              />
              {passwordError && (
                <div className={"uk-alert-danger"} data-uk-alert={""}>
                  <p>{passwordError}</p>
                </div>
              )}
            </div>
            <input
              type={"submit"}
              value={"Register"}
              className={"uk-button uk-button-primary"}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
