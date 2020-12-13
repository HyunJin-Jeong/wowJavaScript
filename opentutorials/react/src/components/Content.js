import React from 'react';

class Content extends React.Component {
  render () {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.description}
      </section>
    );
  }
}

export default Content;