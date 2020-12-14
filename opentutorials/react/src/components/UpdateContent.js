import React from 'react';

class UpdateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      description: this.props.data.description,
    }
  }
  render() {
    return(
      <article>
        <h2>Update Content</h2>
        <form action="" method="post" onSubmit={function(e) {

        }}>
          <p>
            <input
              id="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={function(e) {
                this.setState({title: e.target.value})
            }.bind(this)}></input>
          </p>
          <p>
            <input
              id="description"
              type="text"
              name="description"
              value={this.state.description}
              onChange={function(e) {
                this.setState({description: e.target.value})
            }.bind(this)}></input>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;