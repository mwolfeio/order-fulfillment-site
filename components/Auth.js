import { auth } from "../lib/firebase";
import { useState } from "react";
import Input from "./Input.js";

const Header = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log("Signing in");
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => {
        console.log(error.code, ": ", error.message);
        setError(error.message);
      });
  };

  console.log("email: ", email);

  return (
    <div className="flex-center-center fill-vertical">
      <form className="auth-wrap" onSubmit={signIn}>
        <div className="welcome-message">
          <h1>Sign In</h1>
          <p>Welcome back, you’ve been missed!</p>
        </div>
        <Input type="email" placeholder="Your Emial" func={setEmail} />
        <Input type="password" placeholder="Password" func={setPassword} />
        <button className="flex-center-center" type="submit">
          Sign In
        </button>
        {error ? (
          <p className="auth-footer" style={{ color: "red" }}>
            {error.replace("Firebase: ", "")}
          </p>
        ) : (
          ""
        )}
        <p className="auth-footer">
          Don't have an account yet?{"  "}
          <a href="mailto:matt@mwolfe.io">Contact us</a>
        </p>
      </form>
    </div>
  );
};
export default Header;
