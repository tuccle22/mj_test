import React from 'react';

export default class Button extends React.Component {

  render() {

    var style = {
      color: this.props.color,
      backgroundColor: this.props.bgColor
    }

    return (
      <button style={style} onClick={this.props.someFunction}>{this.props.label}</button>
    );
  }
}
