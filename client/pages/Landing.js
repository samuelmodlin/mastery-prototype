/*MIT License
Copyright (c) 2018 Shama Hoque
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR 
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
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
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
});


class Landing extends React.Component {
  constructor() {
   super();
   this.state = {
     showClass: false,
   };
 }

   handleClick() {

       console.log('The link was clicked.');
       this.setState({showClass: true});
       console.log(this.state.showClass);
      }

  render() {
    const { classes } = this.props;
    const { showClass } = this.state;
    const bull = <span className={classes.bullet}> • </span>;

    return (
      <div>
        {" "}
        {/*Class 1*/}{" "}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Meets: TR 2 - 3{" "}
            </Typography>{" "}
            <Typography variant="h5" component="h2">
              Class 1{" "}
            </Typography>{" "}
            <Typography className={classes.pos} color="textSecondary">
              Current Assignment: Test 2{" "}
            </Typography>{" "}
            <Typography variant="h6" component="p">
              Class Stats{" "}
            </Typography>{" "}
          </CardContent>{" "}
          <CardActions>
            <Button size="small"> Go To Class Page </Button>{" "}
          </CardActions>{" "}
        </Card>
        {/*Class 2*/}{" "}
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Meets: MFW 10 - 11{" "}
            </Typography>{" "}
            <Typography variant="h5" component="h2">
              Class 2{" "}
            </Typography>{" "}
            <Typography className={classes.pos} color="textSecondary">
              Current Assignment: HW 3{" "}
            </Typography>{" "}
            <Typography variant="body2" component="p">
              Class Stas{" "}
            </Typography>{" "}
          </CardContent>{" "}
          <CardActions>
            <Button size="small"> Go To Class Page </Button>{" "}
          </CardActions>{" "}
        </Card>

        <Fab className={classes.fab} color='primary' href="#" onClick={() => {
          this.handleClick(); }}>
            <AddIcon />
        </Fab>
        <div>
        {this.state.showClass &&
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Meets: MFW 1 - 2{" "}
              </Typography>{" "}
              <Typography variant="h5" component="h2">
                Class 3{" "}
              </Typography>{" "}
              <Typography className={classes.pos} color="textSecondary">
                Current Assignment: N/A{" "}
              </Typography>{" "}
              <Typography variant="body2" component="p">
                Class Stas{" "}
              </Typography>{" "}
            </CardContent>{" "}
            <CardActions>
              <Button size="small"> Go To Class Page </Button>{" "}
            </CardActions>{" "}
          </Card>}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Landing);
