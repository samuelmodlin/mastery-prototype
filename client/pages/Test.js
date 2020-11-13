import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = (theme) => ({
  exampleCss: {
    margin: theme.spacing(2),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

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
              <Button>Generate PDFs</Button>
              <List component="nav" aria-labelledby="nested-list-subheader"
              subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Topics
            </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button>
              <ListItemText primary="Topic 1" />
            </ListItem>


              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Question 1" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Question 2" />
                </ListItem>
              </List>


            <ListItem button>
              <ListItemText primary="Topic 2" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Topic 3" />
            </ListItem>

            </List>

            </Typography>
          </AccordionDetails>
        </Accordion>

        {/*accordion 2*/}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <Typography className={classes.heading}> Test 2 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Button>Generate PDFs</Button>
            <List component="nav" aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Topics
          </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary="Topic 3" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Topic 4" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Topic 5" />
          </ListItem>

          <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                  <ListItemText primary="Question 1" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                  <ListItemText primary="Question 2" />
              </ListItem>
          </List>

          </List>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/*accordion 3*/}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header">
            <Typography className={classes.heading}> Test 3 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <Button>Generate PDFs</Button>
            <List component="nav" aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Topics
          </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button>
            <ListItemText primary="Topic 5" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Topic 6" />
          </ListItem>

          <ListItem button>
            <ListItemText primary="Topic 7" />
          </ListItem>

          <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                  <ListItemText primary="Question 1" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                  <ListItemText primary="Question 2" />
              </ListItem>
          </List>

          </List>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    );
  }
}

export default withStyles(useStyles)(Test);
