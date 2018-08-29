import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  };

  handleChange = (event) => {
    this.setState({value: event.target.value}
    )
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value}/>
        <small>Remaining Characters: {this.props.maxChars - this.state.value.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
