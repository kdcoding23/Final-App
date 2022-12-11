import React, { Component } from 'react';
import Buttons from './Buttons';


class Contact extends Component {
  render() {
    return (
        <div>
          <h2>Contact</h2>
          <p>If you have any further questions or comments, feel free to contact me below!</p>
        <form>
          <Buttons />
        </form>
        </div>
    );
  }
}

export default Contact;