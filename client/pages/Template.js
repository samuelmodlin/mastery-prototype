import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    exampleCss: {
        margin: theme.spacing(2),
    },
});

class ClassComponent extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button>Example MUI</Button>
                <p className={classes.exampleCss}>Example JSX</p>
            </div>
        )
    }
}


export default withStyles(useStyles)(ClassComponent)