const React = require('react');

class app extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <h1>Hellloaefa</h1>
        {this.props.chlidren}
      </div>
    )
  }
}

module.exports = app;
