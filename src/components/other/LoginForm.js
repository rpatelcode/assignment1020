import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  Message,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import useForm from "react-hook-form";
import FormEnter from "../../components/other/FormEnter";
import _ from "lodash";
import logo from "../../images/logo_city.gif";

const LoginForm = () => {
  useEffect(() => {
    register({ name: "firstName" }, { required: true });
    register({ name: "lastName" }, { required: true });
    register(
      { name: "userName" },
      {
        required: true,
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
    );
    register(
      { name: "password" },
      {
        required: true,
        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      }
    );

    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("userName", userName);
    setValue("password", password);
  }, []);

  const {
    register,
    errors,
    handleSubmit,
    setValue,
    triggerValidation,
    formState
  } = useForm({ mode: "onChange" });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, showLoader] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signupForm, setSignupForm] = useState(false);
  const [state, setState] = useState([]);

  const [userCreated, setUserCreated] = useState(false);

  const handleDismiss = () => {
    // setUserCreated(false);

    setTimeout(() => {
      setUserCreated(false);
    }, 1000);
  };

  const login = async ({ userName, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userName === "demo@demo.com" && password === "demo") {
          resolve();
        } else if (userName === "demo" && password === "demo") {
          resolve();
        } else if (_.find(state, { userName: userName, password: password })) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    setError("");
    showLoader(true);
    setUserCreated(false);

    try {
      await login({ userName, password });
      setIsLoggedIn(true);
    } catch (error) {
      setError("Incorrect User Name or Password!");
      showLoader(false);
      setuserName("");
      setPassword("");
    }
  };

  const onSignUp = (data, e) => {
    e.preventDefault();
    setError("");
    showLoader(true);
    setState([...state, data]);
    setUserCreated(true);

    setTimeout(() => {
      setSignupForm(false);
      showLoader(false);
    }, 1000);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    showLoader(false);
    setuserName("");
    setPassword("");
  };
  return (
    <>
      {isLoggedIn ? (
        <>
          <Container style={{ marginTop: "1em" }} textAlign="right">
            <h3>
              Welcome {userName}! {"  "}
              <Button basic size="mini" onClick={logOut}>
                Log Out
              </Button>
            </h3>
          </Container>

          <FormEnter />
        </>
      ) : (
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <img border="0" alt="logo" src={logo} />

            {!signupForm && (
              <>
                <Header as="h2" textAlign="center">
                  Log-in required to see a demo
                </Header>

                {userCreated && (
                  <Message
                    positive
                    onDismiss={handleDismiss}
                    header="New User Created!"
                    content="You can use it's credential to login now."
                  />
                )}
                {error && <Message error content={error} />}

                <Form onSubmit={onSubmit} size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="mail outline"
                      iconPosition="left"
                      placeholder="Email"
                      value={userName}
                      onChange={e => setuserName(e.currentTarget.value)}
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={e => setPassword(e.currentTarget.value)}
                    />

                    <Button primary fluid size="large" disabled={isLoading}>
                      {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                  </Segment>
                </Form>
                <Button
                  basic
                  fluid
                  onClick={e => setSignupForm(true)}
                  style={{ marginTop: "2em" }}
                >
                  New to us? Sign Up
                </Button>
              </>
            )}
            {signupForm && (
              <>
                <Header as="h2" textAlign="center">
                  Sign Up
                </Header>
                {errors.password && (
                  <Message
                    error
                    content={
                      "Password must have 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
                    }
                  />
                )}

                <Form onSubmit={handleSubmit(onSignUp)} size="large">
                  <Segment textAlign="left" stacked>
                    <Form.Input
                      id="firstName"
                      name="firstName"
                      fluid
                      placeholder="First Name"
                      label="First Name"
                      onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await triggerValidation({ name });
                      }}
                      required
                      error={errors.firstName ? true : false}
                    />
                    <Form.Input
                      id="lastName"
                      name="lastName"
                      fluid
                      placeholder="Last Name"
                      label="Last Name"
                      onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await triggerValidation({ name });
                      }}
                      required
                      error={errors.lastName ? true : false}
                    />
                    <Form.Input
                      id="userName"
                      name="userName"
                      fluid
                      icon="mail outline"
                      iconPosition="left"
                      placeholder="Email"
                      label="Email"
                      onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await triggerValidation({ name });
                      }}
                      required
                      error={errors.userName ? true : false}
                    />
                    <Form.Input
                      id="password"
                      name="password"
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      label="Password"
                      onChange={async (e, { name, value }) => {
                        setValue(name, value);
                        await triggerValidation({ name });
                      }}
                      required
                      error={errors.password ? true : false}
                    />
                    <Button
                      primary
                      fluid
                      size="large"
                      disabled={
                        !formState.dirty ||
                        (formState.dirty && !formState.isValid)
                      }
                    >
                      {isLoading ? "Signing Up..." : "Sign Up"}
                    </Button>
                  </Segment>
                </Form>

                <Button
                  basic
                  fluid
                  onClick={e => setSignupForm(false)}
                  style={{ marginTop: "2em" }}
                >
                  Already has account? Login
                </Button>
              </>
            )}
          </Grid.Column>
        </Grid>
      )}
    </>
  );
};

export default LoginForm;
