import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../actions/user";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    buttonProgress: {
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  },
}));

function Create() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });
//   const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    handleValidate(inputs);
  }, [inputs]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (handleValidate(inputs)) {
      dispatch(createUser(inputs, history));
    }
  }

  function handleValidate(values) {
    const errors = {};
    let isValid = true;
    if (!values.name) {
      isValid = false;
      errors.name = "Please enter name";
    }
    if (!values.email) {
      isValid = false;
      errors.email = "Please enter email.";
    }
    if (!values.password) {
      isValid = false;
      errors.password = "Please enter password";
    }
    if (!values.role) {
        isValid = false;
        errors.role = "Please enter role";
      }
    // setErrors(errors);
    return isValid;
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Create User</h1>
      <form
        className={classes.root}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="name"
          label="Name"
          value={inputs.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="email"
          label="email"
          value={inputs.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          value={inputs.password}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="role"
          label="Role"
          value={inputs.role}
          onChange={handleChange}
          fullWidth
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
          onClick={submitted}
        >
          Submit
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </form>
    </React.Fragment>
  );
}

export default Create;