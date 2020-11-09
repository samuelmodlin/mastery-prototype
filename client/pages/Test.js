import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = (theme) => ({
  exampleCss: {
    margin: theme.spacing(2),
  },
});

// export default function SimpleAccordion() {
//   const classes = useStyles();

class Test extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <Typography className={classes.heading}> Test 1 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Add Item
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        <p className={classes.exampleCss}> Example JSX: Test Page </p>
      </div>
    );
  }
}

export default withStyles(useStyles)(Test);
