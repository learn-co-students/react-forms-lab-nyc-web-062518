import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {message:''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({message:e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.message}/>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
