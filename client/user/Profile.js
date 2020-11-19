import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import AddClass from "./../core/AddClass";

import auth from "./../auth/auth-helper";
import { read } from "./api-user.js";
import { Redirect, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  exampleCss: {
    margin: theme.spacing(2),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Profile({ match }) {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [addCourse, setAddCourse] = React.useState(false);
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();

  function handleAddCourse() {
    setAddCourse(true);
  }

  function handleCourseClose() {
    setAddCourse(false);
  }

  const handleAdd = (course) => {
    user.classes.push(course);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(
      {
        userId: match.params.userId,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        console.log(data);
        setUser(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.userId]);

  if (redirectToSignin) {
    return <Redirect to="/signin" />;
  }
  const courses = user.classes ? user.classes : [];
  console.log(courses);
  return (
    <div>
      <AddClass
        open={addCourse}
        handleClose={handleCourseClose}
        handleAdd={handleAdd}
      />
      {courses.map((course) => (
        <React.Fragment key={course._id}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {course.schedule}
              </Typography>
              <Typography variant="h5" component="h2">
                {course.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/table">
                <Button color="primary" variant="contained" size="small">
                  {" "}
                  Go To Class Page
                </Button>
              </Link>
              <Link to="/test">
                <Button color="primary" variant="outlined" size="small">
                  {" "}
                  Go To Assessments Page
                </Button>
              </Link>
            </CardActions>
          </Card>
        </React.Fragment>
      ))}
      <Fab
        className={classes.fab}
        color="primary"
        href="#"
        onClick={() => {
          handleAddCourse();
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
