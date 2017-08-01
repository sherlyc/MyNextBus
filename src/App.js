import React, { Component } from "react";
import {
  Grid,
  Navbar,
  Jumbotron,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  // getValidationState() {
  //   const length = this.state.value.length;
  //   if (length > 10) return "success";
  //   else if (length > 5) return "warning";
  //   else if (length > 0) return "error";
  // }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">My Next Bus</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Find a Stop</h1>
            <form>
              {/* <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
              > */}
              <FormGroup controlId="formBasicText">
                <ControlLabel>Please enter a Stop Number</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Example: 5115"
                  onChange={this.handleChange.bind(this)}
                />
                <FormControl.Feedback />
                <HelpBlock>Please enter numbers only.</HelpBlock>
              </FormGroup>
              <Button bsStyle="primary" bsSize="large" block>
                Go
              </Button>
            </form>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
