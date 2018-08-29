import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={event => this.handleChange(event)} />
        <h2>Remaining Characters: {this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({message: event.target.value})
  }
}

export default TwitterMessage;
