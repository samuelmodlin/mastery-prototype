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
import AddIcon from '@material-ui/icons/Add';




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
    const { showClass } = this.state;




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

        <Accordion className={classes.fab} color='primary' href="#" onClick={() => {
          this.handleClick(); }}>
            <AddIcon />
        </Accordion>
        <div>
        {this.state.showClass &&
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
          </Accordion>}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Test);
