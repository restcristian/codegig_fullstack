import React, { FunctionComponent, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { logIn } from "../../store/actions";

interface ErrorType {
  text: string;
}

const Login: FunctionComponent = () => {
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(logIn(username, password));
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <Form testId="login-form" isValid onSubmit={onSubmit} errors={errors}>
        <Input
          id="username"
          label="Please, enter username"
          placeholder="ej: admin"
          maxLength={20}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          testId="input-username"
        />
        <Input
          id="password"
          label="Please, enter password"
          placeholder=""
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          testId="input-password"
        />
      </Form>
    </div>
  );
};

export default Login;
