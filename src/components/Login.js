import "./Login.css";
import logIcon from "../assets/login-logo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider);
  }

  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img src={logIcon} alt="logo-login" />
          <div className="login__text">
            <h1>Sign in to WhatsApp</h1>
          </div>
          <Button onClick={login}>Sign in with Google</Button>
        </div>
      </div>
    </div>
  );
}
