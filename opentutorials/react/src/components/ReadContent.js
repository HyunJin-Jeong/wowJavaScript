import React from 'react';

class ReadContent extends React.Component {
  render () {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.description}
      </section>
    );
  }
}

export default ReadContent;