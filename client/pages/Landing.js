import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  withStyles
} from '@material-ui/core/styles';

const useStyles = theme => ({
  exampleCss: {
    margin: theme.spacing(2),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Landing extends React.Component {
  render() {
    const {
      classes
    } = this.props;
    const bull = < span className = {
      classes.bullet
    } > • < /span>;


    return ( <
      div > {
        /*Class 1*/
      } <
      Card className = {
        classes.root
      }
      variant = "outlined" >
      <
      CardContent >
      <
      Typography className = {
        classes.title
      }
      color = "textSecondary"
      gutterBottom >
      Meets: TR 2 - 3 <
      /Typography> <
      Typography variant = "h5"
      component = "h2" >
      Class 1 <
      /Typography> <
      Typography className = {
        classes.pos
      }
      color = "textSecondary" >
      Current Assignment: Test 2 <
      /Typography> <
      Typography variant = "h6"
      component = "p" >
      Class Stats <
      /Typography> < /
      CardContent > <
      CardActions >
      <
      Button size = "small" > Go To Class Page < /Button> < /
      CardActions > <
      /Card>

      {
        /*Class 2*/
      } <
      Card className = {
        classes.root
      }
      variant = "outlined" >
      <
      CardContent >
      <
      Typography className = {
        classes.title
      }
      color = "textSecondary"
      gutterBottom >
      Meets: MFW 10 - 11 <
      /Typography> <
      Typography variant = "h5"
      component = "h2" >
      Class 2 <
      /Typography> <
      Typography className = {
        classes.pos
      }
      color = "textSecondary" >
      Current Assignment: HW 3 <
      /Typography> <
      Typography variant = "body2"
      component = "p" >
      Class Stas <
      /Typography> < /
      CardContent > <
      CardActions >
      <
      Button size = "small" > Go To Class Page < /Button> < /
      CardActions > <
      /Card>

      <
      /
      div >
    )
  }
}


export default withStyles(useStyles)(Landing)