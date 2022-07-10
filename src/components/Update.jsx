import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUserById, updateUserById } from "../actions/user";

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

function Update() {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const  user  = useSelector((state) => state.users?.results);
  console.log(user)
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setInputs(user);
    }
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!inputs.name || !inputs.email || !inputs.password || !inputs.role) {
      return;
    }
    dispatch(updateUserById(id, inputs, history));
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Update User</h1>
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
          name="name"
          label="Name"
          value={inputs.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          value={inputs.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          value={inputs.password}
          onChange={handleChange}
          fullWidth
        />
          <TextField
          name="role"
          label="role"
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

export default Update;