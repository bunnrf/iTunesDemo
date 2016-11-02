import React from 'react';

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

module.exports = app;
