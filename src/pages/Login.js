import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../Query/graphql";
import { Form, Button } from "semantic-ui-react";
import { AuthContext } from '../context/auth';

function Login(props) {

  const context  = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const [values, setValues] = useState({
    hostelName: "",
    password: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, {data: {login: userData}}) {
      // console.log(result);
      context.login(userData)
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <Form.Input
          label="Username"
          placeholder="Username..."
          value={values.hostelName}
          type="text"
          name="hostelName"
          onChange={onChange}
          error={errors.hostelName ? true : false}
        />
        <Form.Input
          label="Password"
          placeholder="Password..."
          value={values.password}
          type="password"
          name="password"
          onChange={onChange}
          error={errors.password ? true : false}
        />

        <Button type="submit" primary>
          LOGIN
        </Button>
      </Form>
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Login;
