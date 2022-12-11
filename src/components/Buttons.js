import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Buttons extends Component {
  render() {
    return (
        <div>
          <Button className="button" href="https://www.linkedin.com/in/katieorgen/">Contact Me!</Button>
        </div>
    );
  }
}

export default Buttons;
