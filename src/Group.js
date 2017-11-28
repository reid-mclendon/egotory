import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import './Group.css';
import { red, purple } from 'material-ui/colors'

var entries = 0;
var hahaha;
var entriez = [];
const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 32,
    marginLeft: 32,
    marginRight: 32,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Entry extends React.Component {
  constructor() {

    super();
    entries += 1;
    if (localStorage.getItem('hahaha') != null)
    {

    }
    else {
      this.state = {value: ''};

    }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  localStorage.setItem(this.state.id, event.target.value);
  this.setState({value: event.target.value});

}

  render() {
    this.state = {id: this.props.daddy + " " + this.props.no};
    hahaha = localStorage.getItem(this.state.id);
    console.log(localStorage.getItem(this.state.id));
    this.state = {id: this.props.daddy + " " + this.props.no, value: hahaha};
    if (entriez.length < 9)
    {
      entriez.push(this.state.id);
    }
    return (
      <div>
      <TextField
                label={'No. ' + this.props.no}
                placeholder="Placeholder"
                value={this.state.value}
                margin="normal"
                multiline
                fullWidth
                onChange={this.handleChange}
              ></TextField>
              <br/><br/>

              </div>
    );


  }


}

class Section extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
          <Grid item xs={12} sm={4}>
            <h2>{this.props.title}</h2>
          <Entry no = '1' daddy = {this.props.title}/>
          <Entry no = '2' daddy = {this.props.title}/>
          <Entry no = '3' daddy = {this.props.title}/>
          </Grid>
    )
  }
}

class Page extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    for (var i = 0; i < entriez.length + 1; i++) {
      localStorage.removeItem(entriez[i]);
       }
       window.location.reload(true);
  }
  render() {
    return (
      <div className="Page">
      <Grid container spacing={24}>
      <Grid item xs={12} sm={12}>
      </Grid>
      <Section title="Positive Ownerships"/>
      <Section title="Constructive Ownerships"/>
      <Section title="Appreciations"/>
      <Grid item xs={12} sm={12}>
      <Button raised color="secondary" onClick={this.handleClick}>
              Clear
            </Button>

        </Grid>
      </Grid>
      </div>
    )
  }
}

function Group(props) {
  const { classes } = props;

  return (
    <Page />
  );
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Group)
