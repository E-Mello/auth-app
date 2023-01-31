import { NextPage } from "next";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  return (
    <div className="sign-in-form">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="edio.pereira@unimed279.com.br"
        value="mello"
      />
      <input type="password" placeholder="**********" value="1234" />
      <input type="submit" value="Login" />
    </div>
  );
};

export default SignIn;
