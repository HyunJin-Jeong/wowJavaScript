import React from 'react';
import './App.css';

import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import Control from './components/Control';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.maxContentID = 3;
    this.state = {
      mode: "welcome",
      selectedID: 1,
      subject: {
        title: "WEB",
        subTitle: "World Wide Web!",
      },
      welcome: {
        title: "Welcome",
        description: "Hello, React!",
      },
      contents: [
        { id: 1, title: "HTML", description:"HTML is for information" },
        { id: 2, title: "CSS", description:"CSS is for design" },
        { id: 3, title: "Javscript", description:"Javascript is for interactive" },
      ],
    };
  }

  getReadContent() {
    return this.state.contents.filter(content => content.id === this.state.selectedID)[0]
  };

  getContent() {
    let title, description, article = "";
    if (this.state.mode === "welcome") {
      title = this.state.welcome.title;
      description = this.state.welcome.description;
      article = <ReadContent title={title} description={description}></ReadContent>
    } else if (this.state.mode === "read") {
      const contents = this.getReadContent();
      article = <ReadContent title={contents.title} description={contents.description}></ReadContent>
    } else if (this.state.mode === "create") {
      article = <CreateContent onSubmit={function(_title, _description) {
        this.maxContentID ++;
        const contents = this.state.contents.concat({
          id: this.maxContentID,
          title: _title,
          description: _description,
        });
        this.setState({
          contents,
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === "update") {
      article = <UpdateContent onSubmit={function(){
      }.bind(this)}></UpdateContent>
    }
    return article;
  }

  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          subTitle={this.state.subject.subTitle}
          onChangePage={function() {
            this.setState({mode: "welcome"});
          }.bind(this)}
        >
        </Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function(id) {
            this.setState({
              mode: "read",
              selectedID: Number(id),
            });
          }.bind(this)}
        >
        </TOC>
        <Control onChangeMode={function(mode) {
          this.setState({mode})
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;