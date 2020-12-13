import React from 'react';

class CreateContent extends React.Component {
  render() {
    return(
      <article>
        <h2>Create Content</h2>
        <form action="/create_process" method="post" onSubmit={function(e) {
          e.preventDefault();
          this.props.onSubmit(e.target.title.value, e.target.description.value);
        }.bind(this)}>
          <p>
            <input id="title" type="text" name="title"></input>
          </p>
          <p>
            <input id="description" name="description"></input>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;