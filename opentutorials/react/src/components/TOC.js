import React from 'react';

class TOC extends React.Component {
  render() {
    const lists = this.props.data.map(
      data =>
        <li key={data.id}>
          <a
            href={"/contents/"+data.id}
            data-id={data.id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
          }.bind(this)}>
            {data.title}
          </a>
        </li>
    );
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;