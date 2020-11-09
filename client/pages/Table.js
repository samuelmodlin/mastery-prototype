import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

function createData(name, topicOne, topicTwo, topicThree, topicFour, topicFive, topicSix, topicSeven, topicEight, topicNine, topicTen) {
    return { name, topicOne, topicTwo, topicThree, topicFour, topicFive, topicSix, topicSeven, topicEight, topicNine, topicTen };
}

const rows = [
    createData('Bill Nye', 'N/A', 'M', 'P', 'M', 'NW', 'P', 'M', 'M', 'M', 'P'),
    createData('Jacinda Ardern', 'M', 'M', 'P', 'N/A', 'M', 'P', 'M', 'M', 'N/A', 'M'),
    createData('Doug Locke', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M'),
    createData('Serena Williams', 'M', 'N/A', 'M', 'P', 'P', 'M', 'NW', 'M', 'M', 'M'),
    createData('Jim Parsons', 'P', 'NW', 'NW', 'N/A', 'M', 'M', 'M', 'P', 'M', 'M'),
];

class MainTable extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
              <Button>Flip rows and columns</Button>

              <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
              <TableHead>
                  <TableRow>
                  <StyledTableCell>Student</StyledTableCell>
                  <StyledTableCell align="right">Topic 1</StyledTableCell>
                  <StyledTableCell align="right">Topic 2</StyledTableCell>
                  <StyledTableCell align="right">Topic 3</StyledTableCell>
                  <StyledTableCell align="right">Topic 4</StyledTableCell>
                  <StyledTableCell align="right">Topic 5</StyledTableCell>
                  <StyledTableCell align="right">Topic 6</StyledTableCell>
                  <StyledTableCell align="right">Topic 7</StyledTableCell>
                  <StyledTableCell align="right">Topic 8</StyledTableCell>
                  <StyledTableCell align="right">Topic 9</StyledTableCell>
                  <StyledTableCell align="right">Topic 10</StyledTableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {rows.map((row) => (
                  <StyledTableRow key={row.name} hover role="checkbox" tabIndex={-1} key={row.code}>
                      <StyledTableCell component="th" scope="row">
                      {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.topicOne}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicTwo}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicThree}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicFour}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicFive}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicSix}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicSeven}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicEight}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicNine}</StyledTableCell>
                      <StyledTableCell align="right">{row.topicTen}</StyledTableCell>
                  </StyledTableRow>
                  ))}
              </TableBody>
              </Table>
              </TableContainer>
            </div>
        )
    }
}


export default withStyles(useStyles)(MainTable)